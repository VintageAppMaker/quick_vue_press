<!-- /.vuepress/components/Android.vue -->

<template>
<div>
    <ol>
        <li>
            <div v-for="post in posts">
            <h3><router-link :to="post.path"> {{ post.frontmatter.title }} </router-link></h3>
            <p id = "card" >{{ post.frontmatter.description }}</p>
        <br>        
    </div>
        </li>
    </ol>
</div>
</template>

<script>
export default {
    data (){
        return {
            count : 0
        }
    },
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
    color: #888888;
}

</style>
