<template>
    <div class="bid-success-page">
        <div class="bid-success-text">
            bid success
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BidSuccess',
};
</script>
  
<style>
.bid-success-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
}

.bid-success-text {
    font-size: 2rem;
    font-weight: bold;
    color: #4caf50;
    animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
  