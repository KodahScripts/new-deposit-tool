<template>
<label class="toggle-switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
</template>

<style scoped>
/* Hide default HTML checkbox */
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The label acts as the container for the switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* The slider track */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px; /* Rounded corners for the track */
}

/* The slider knob */
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%; /* Rounded knob */
}

/* Styles when the checkbox is checked */
input:checked + .slider {
  background-color: #2196F3; /* Blue when checked */
}

input:checked + .slider:before {
  transform: translateX(26px); /* Move knob to the right */
}
</style>
