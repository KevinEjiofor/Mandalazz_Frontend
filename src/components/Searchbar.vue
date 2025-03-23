<template>
  <div class="search-bar">
      <InputText
      v-model="searchQuery"
      placeholder="Search"
      @input="handleSearch"
      class="search-input"
      />
      <i class="pi pi-search search-icon"></i>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  name: "SearchBar",
  components: {
    InputText,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      // Emit the search query to the parent component
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  /* max-width: 400px; */
  width: 22.34%;
  border-radius: 8px;
  height: 5.5%;
  
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  
}

.search-input::placeholder {
color: #A1A2AE;
}

.search-icon {
  /* color: #aaa; */
  color: #A1A2AE;

}
</style>
