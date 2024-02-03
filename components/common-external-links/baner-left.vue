<template>
<section class="h-full flex  justify-end">
  <div class="h-full w-3/4">
    <div>
      <img :src="imageUrl" alt="Mój obraz">
    </div>
    <div class=" sticky top-0">
      <div class="external-links component-padding component-border-horizontal font-jost">
        <SectionTitle><b>Nagłówki</b> strony</SectionTitle>
        <ul class="flex flex-col">
          <li>
              <div class="mt-[10px]">Link 1</div>
          </li>
          <li>
            <div class="mt-[10px]">Link 2</div>
          </li>
          <li>
            <div class="mt-[10px]">Link 3</div>
          </li>
          <li>
            <div class="mt-[10px]">Link 4</div>
          </li>
          <li>
            <div class="mt-[10px]">Link 5</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: 'https://motozloty.com/images/313827435_4184292798462898_7030388460105238996_n.jpg'
    }
  }
};
</script>