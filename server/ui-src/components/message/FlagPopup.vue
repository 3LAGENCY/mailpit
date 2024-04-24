<script>
export default {
  props: ["flag"], // Define a prop to receive the flag variable
  methods: {
    closePopup() {
      this.$emit("close"); // Emit a close event to the parent component
    },
  },
};
</script>

<template>
  <div
    class="modal"
    tabindex="-1"
    role="dialog"
    :class="{ show: flag, 'd-block': flag }"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-title">Your flag:</h5>
          <button
            type="button"
            class="close"
            style="background-color: transparent; border: none"
            @click="closePopup"
          >
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ flag }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closePopup">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
