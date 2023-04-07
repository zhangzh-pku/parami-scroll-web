<template>
    <div class="ad-config">
        <div class="config-form-wrapper">
            <div class="config-form">
                <h3>Config your Ad</h3>
                <label class="content-class"><span class="required" v-if="contentRequired">*</span>Content:</label>
                <input type="text" v-model="ad.content" />
                <label class="file-class">Ad icon: <span class="required" v-if="adIconRequired">*</span></label>
                <span class="custom-upload">
                    <input type="file" @change="onAdIconChange" />
                    <button type="button" class="upload-btn">
                        <span>Click to Upload</span>
                    </button>
                </span>
                <label class="file-class">Poster: <span class="required" v-if="posterRequired">*</span></label>
                <span class="custom-upload">
                    <input type="file" @change="onPosterChange" />
                    <button type="button" class="upload-btn">
                        <span>Click to Upload</span>
                    </button>
                </span>
                <label class="content-class"><span class="required" v-if="instructionRequired">*</span>Instruction:</label>
                <input type="text" v-model="ad.instruction" />
            </div>
        </div>
        <div class="preview">
            <h3>Ad Preview</h3>
            <div class="ad-preview">
                <div class="ad-content">{{ ad.content }}</div>
                <div v-if="!posterPreview" class="default-poster">Your post here</div>
                <img v-else class="poster" :src="posterPreview" />
                <a :href="ad.instruction" target="_blank">
                    <img v-if="!adIconPreview" class="ad-icon" src="../img/iconic_gradientbg.png" />
                    <img v-else c;ass="ad-icon" :src="adIconPreview">
                </a>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            ad: {
                content: '',
                adIcon: null,
                poster: null,
                instruction: '',
            },
            adIconPreview: '',
            posterPreview: '',
        };
    },
    computed: {
        contentRequired() {
            return this.ad.content.trim() === '';
        },
        adIconRequired() {
            return !this.adIcon;
        },
        posterRequired() {
            return !this.poster;
        },
        instructionRequired() {
            return this.ad.instruction.trim() === '';
        },
    },
    methods: {
        onAdIconChange(event) {
            this.ad.adIcon = event.target.files[0];
            this.adIconPreview = URL.createObjectURL(this.ad.adIcon);
        },
        onPosterChange(event) {
            this.ad.poster = event.target.files[0];
            this.posterPreview = URL.createObjectURL(this.ad.poster);
        },
    },
};
</script>
  
<style>
.content-class {
    color: #000;
}

.file-class {
    color: #000
}
</style>

<style scoped>
.ad-config {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
}

.config-form-wrapper {
    background-color: #f8f9fa;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
}

.input-field {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;
    width: 100%;
}

.input-field:focus {
    border-color: #007bff;
}

.config-form,
.preview {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 40px;
    margin: 0 20px;
    width: 40%;
    min-width: 300px;
}

.ad-preview {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    overflow: hidden;
}

.poster {
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

.custom-upload {
    position: relative;
    display: inline-block;
}

input[type="file"] {
    display: none;
}

.upload-btn {
    background-color: #f0f0f0;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    justify-content: center;
    width: 100%;
}

.default-poster {
    background-color: #f0f0f0;
    border: 1px dashed #ccc;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #999;
    text-align: center;
}
</style>
