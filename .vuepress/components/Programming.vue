<!-- /.vuepress/components/Android.vue -->

<template>
<div>
    <div id = "card" v-for="post in posts">
        <H1><router-link :to="post.path"> {{ post.frontmatter.title }} </router-link></h1>
        <hr>
        {{ post.frontmatter.description }}
        <br>        
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
             return this.$site.pages
                .filter(x => x.path.startsWith('/programming/') && !x.frontmatter.programming_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>

<style  scoped>

#card {
    font-style: italic;
    font-size : 18px; 
    color: #888888;
}

</style>
