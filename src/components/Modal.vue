<template>
    <div class="modal" v-if="showModal">
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

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        showModal(oldVal, newVal) {
            console.log('oldVal', oldVal);
            console.log('newVal', newVal);
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
}

</script>

<style>
/* Styles for modal and overlay */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background: darkcyan;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow-y: scroll;
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