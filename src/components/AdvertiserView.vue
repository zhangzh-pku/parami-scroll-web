<template>
    <header>
        <h1 class="main-title">BID ON HNFT</h1>
        <h4 class="subtitle">Place your advertisement on HNFTs</h4>
    </header>
    <div class="ad-config">
        <div class="config-form">
            <h3 class="config-add-title">Config your Ad</h3>
            <label class="sub-ad-title-class">
                Content:<span class="required" v-if="contentRequired">*</span>
            </label>
            <input type="text" v-model="ad.content" />
            <label class="sub-ad-title-class">
                Ad icon: <span class="required" v-if="adIconRequired">*</span>
            </label>
            <span class="custom-upload">
                <input type="file" ref="adIconInput" @change="onAdIconChange" style="display: none" />
                <button type="button" class="upload-btn" @click="triggerFileUpload('adIconInput')">
                    <UploadOutlined /><span class="upload-content"> Click to Upload</span>
                </button>
            </span>
            <label class="sub-ad-title-class">
                Poster: <span class="required" v-if="posterRequired">*</span>
            </label>
            <span class="custom-upload">
                <input type="file" ref="posterInput" @change="onPosterChange" style="display: none" />
                <button type="button" class="upload-btn" @click="triggerFileUpload('posterInput')">
                    <UploadOutlined /><span class="upload-content"> Click to Upload</span>
                </button>
            </span>
            <label class="sub-ad-title-class">
                Influencer: <span class="required" v-if="kolRequired">*</span>
            </label>
            <span class="custom-upload">
                <input type="file" ref="kolInput" @change="onKolChange" style="display: none;" />
                <button type="button" class="upload-btn" @click="triggerFileUpload('kolInput')">
                    <UploadOutlined /><span class="upload-content"> Click to Upload</span>
                </button>
            </span>
            <label class="sub-ad-title-class">
                Instruction:<span class="required" v-if="instructionRequired">*</span>
            </label>
            <input type="text" v-model="ad.instruction" />
            <label class="sub-ad-title-class">
                Price:</label>
            <input type="float" v-model="ad.price" />

        </div>
        <div class="preview">
            <h3 class="config-add-title">Ad Preview, below is an example</h3>
            <div class="ad-preview" style="position: relative;">
                <div class="ad-content">{{ ad.content }}</div>
                <img v-if="!posterPreview" class="default-poster" src="../img/post_demo.png" />
                <img v-else class="poster" />
                <a :href="ad.instruction" target="_blank">
                    <img v-if="!adIconPreview" class="ad-icon" src="../img/iconic_gradientbg.png" />
                    <img v-else class="ad-icon" :src="adIconPreview" />
                </a>
                <img v-if="!kolPreview" class="default-kol" src="../img/kol_demo.png" />
                <img v-else class="kol" :src="kolPreview" />
            </div>
            <button class="bid-button" @click="approveAD3Token">Bid</button>
        </div>
    </div>
</template>
  
<script>
import { UploadOutlined } from "@ant-design/icons-vue";
import { ethers } from "ethers";
import { inject } from 'vue';
export default {
    setup() {
        const store = inject('store');
        return { store };
    },
    data() {
        return {
            ad: {
                content: "",
                adIcon: null,
                poster: null,
                kol: null,
                instruction: "",
                price: 0,
            },
            adIconPreview: "",
            posterPreview: "",
        };
    },
    computed: {
        contentRequired() {
            return this.ad.content.trim() === "";
        },
        adIconRequired() {
            return !this.ad.adIcon;
        },
        kolRequired() {
            return !this.ad.kol;
        },
        posterRequired() {
            return !this.ad.poster;
        },
        instructionRequired() {
            return this.ad.instruction.trim() === "";
        },
    },
    methods: {

        async bid() {
            this.approveAD3Token()
            const auctionAddress = "0x8011d3be9a93BD7d3846A2eF95DB90Bbf3101762";
            const ad3TokenAddress = "0x6e6B4C38f3dA63763f87737688f7425dB380a4ac";
            // Replace with the Scroll testnet RPC URL
            const HNFTAddress = "0x392989343233C99a2fcEcffCe102e441d3f8871d";

            const contractABI = [
                "function bid(uint256 hNFTId, address hNFTContractAddr, address tokenContractAddr,uint256 fragmentAmout, string calldata slotUri) public returns (uint256)"
            ];

            const signer = this.store.signer;
            console.log('finally', signer)
            const contract = new ethers.Contract(auctionAddress, contractABI, signer);

            try {
                // Replace with the function name and arguments you want to call
                const result = await contract.bid(1, HNFTAddress, ad3TokenAddress, this.ad.price, this.ad.instruction);
                this.data = result.toString();
            } catch (error) {
                console.error("Error fetching data from contract:", error);
                this.data = "Error fetching data";
            }
            //
        },
        async approveAD3Token() {
            const signer = this.store.signer;
            console.log('_signer:', signer)
            // aprove ad3 token
            const auctionAddress = "0x8011d3be9a93BD7d3846A2eF95DB90Bbf3101762";
            const ad3TokenAddress = "0x6e6B4C38f3dA63763f87737688f7425dB380a4ac";
            // Replace with the Scroll testnet RPC URL

            const contractABI = [
                "function approve(address spender, uint256 amount) public virtual override returns (bool)",
                "function balanceOf(address account) external view returns (uint256)"
            ];
            const contract = new ethers.Contract(ad3TokenAddress, contractABI, signer);
            // const parseAmount = ethers.utils.parseUnits("1000", 18);

            try {
                // Replace with the function name and arguments you want to call
                const result = await contract.approve(auctionAddress, this.ad.price);
                this.data = result.toString();
                console.log(this.data);
            } catch (error) {
                console.error("Error fetching data from contract:", error);
                this.data = "Error fetching data";
            }
        },
        triggerFileUpload(inputRef) {
            this.$refs[inputRef].click();
        },
        onAdIconChange(event) {
            this.ad.adIcon = event.target.files[0];
            this.adIconPreview = URL.createObjectURL(this.ad.adIcon);
        },
        onPosterChange(event) {
            this.ad.poster = event.target.files[0];
            this.posterPreview = URL.createObjectURL(this.ad.poster);
        },
        onKolChange(event) {
            this.ad.kol = event.target.files[0];
            this.kolPreview = URL.createObjectURL(this.ad.kol);
        }
    },
    components: {
        UploadOutlined,
    },
};
</script>

<style>
.content-class {
    color: #000;
}

.file-class {
    color: #000;
}

.ad-config {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 10px;
    font-family: "Roboto", sans-serif;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
}

.config-form {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 40%;
}

.preview {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2px;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 40%;
    min-height: 60%;
}

.ad-preview {
    position: relative;
    border: 5px solid #ccc;
    border-radius: 5px;
    padding: 30px;
    overflow: auto;
    /* 添加滚动条 */
    max-height: 90vh;
    /* 设置最大高度为屏幕高度的90% */
}


.poster,
.default-kol {
    max-width: 100%;
    max-height: 400px;
    border-radius: 5px;
}

.ad-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
}

.required {
    color: red;
    font-weight: bold;
}

input[type="file"] {
    display: none;
}

.upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #f0f0f0;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    padding: 6px 12px;
    width: 90%;
}

.default-poster {
    background-color: #f0f0f0;
    border: 5px dashed #ccc;
    width: 100%;
    height: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6px;
    color: #999;
    text-align: center;
}

.custom-upload {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    justify-content: center;
}

.file-input {
    width: 100%;
    margin-bottom: 8px;
}

.upload-button {
    width: 100px;
}

.content {
    flex-grow: 1;
}

.bid-button {
    display: block;
    margin: 10px auto;
    background-color: orange;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.main-title {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    color: #333;
}

.subtitle {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 40px;
    color: #999;
}

.config-add-title {
    font-size: 15px;
    text-align: center;
    font-family: 'Nunito', sans-serif;
}

.sub-ad-title-class {
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    display: block;
}

.upload-content {
    font-size: 10px;
}

.default-kol {
    background-color: #f0f0f0;
    border: 5px dashed #ccc;
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* 添加此行，以确保图像保持其纵横比并适应容器 */
}


.kol {
    max-width: 100%;
    max-height: 400px;
    border-radius: 5px;
    position: absolute;
    top: calc(100% + 10px);
    /* 在poster下方增加10px的间距 */
}
</style>
