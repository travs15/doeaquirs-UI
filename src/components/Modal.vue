Copy code
<template>
    <div class="modal" v-if="show">
        <div class="modal-content">
            <div class="closeSection">
                <button @click="closeModal">
                    x
                </button>
            </div>
            <div class="modal-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['closeModal'])

const props = defineProps({
    show: Boolean,
});
const closeModal = () => {
    emit('closeModal');
};

</script>

<style>
/* Styles for modal and overlay */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;
    background: darkcyan;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-inner {
    /* Additional styles for inner content */
}

.closeSection {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>