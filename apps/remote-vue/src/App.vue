<template>
  <div class="vue-container">
    <div>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAC4ALgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABwMFBggE/9oACAEBAAAAAHBhmNnqfdiMydYzegrdFqO0c7VKFA2PQPqBRX++JiGYP//EABkBAAIDAQAAAAAAAAAAAAAAAAEFAgQGAP/aAAoCAhADEAAAABmrjqkn5jLNDVm5FVJr/8QAMxAAAQMCBAIHBgcAAAAAAAAAAQIDBAAFBhEiMRITB1FhYnGBghAUISNC4hUgMkFS0uH/2gAIAQEAAT8AuuNsQ2y4PxHY0IlB0q4F6knZQ1Vd+l7FkCVwCFbC2oZoJbd/vWAMeOYptsgvoZanRnMnm2wQkoX+haQSax70ozMP3Rq3WxmK86hvilF0LIQV/FKAElNWXpWxTObdeeh25LYPCjhbcBJHrrD2KMRXp+QlLUFptpAKnC2s6jska6xpZjNgCW0nN6KCT3mtyPLertAE6GpsD5idTR7erzrC+I5uGry1cYyAspQtDjSiQHEqGx8CAazmXW4qU44XJEl1S3HD1qOalGosUNoYix2yTpbaQN1E/ADxNWK0t2m2sxRkVjU6v+TitzRAO4rE1n/CrmtCEkMO62ewfun01iS38iQJKBoeOrsX/tYat/KYMtwa3ho7EfdWBLNzpC7m8jQ0ShjtX9SvL24js4utscaSkc9vWwe8Pp9VS4rUphxh9BKVbjYgg1AgvTpceHHAC3VcI6kJG6vACoUNiFFYisIybaQEpHh+TG9n90nCc0jJmSdfdd+6sC2bkRFXJ1PzJCcmu6193t4BXLFT7PDuMN2LKSVNuZZjYjI50lhtKQlIyAGQA2AFcsVwCv/EACARAAIBBAEFAAAAAAAAAAAAAAECAAMQERIhEyIyQcH/2gAIAQIBAT8ARgtQbcrOiock+OIW2ckcCMMiGuxohPfyKMC2vdm3/8QAKBEAAQMCBAQHAAAAAAAAAAAAAQIDBAARBRIxURAhQdETFCJCYXGx/9oACAEDAQE/AHZUqHPyOuqU0rS+x7Up+zdybW1PwKgvypsxavFWllPT8FYpD8zGOUetHNPajNdciIjgErJy/Y6CoMURYyG/dqo7ng3hiET1yOWW10p2UdeH/9k="
        alt=""
      />
    </div>
    <div class="vue-title">
      <span>Vue version: </span>
      <span> {{ version }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { version } from 'vue';
</script>

<style lang="scss">
@use 'styles' as *;
.vue-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid wheat;
  .vue-title {
    padding: 16px 32px;
    color: black;
    font-weight: bold;
  }
}
</style>
