<template>
	<h1>Posts</h1>
	<div v-for="post in posts" :key="post.id" class="post-list">
		<h3>{{ post.title }}</h3>
		<SinglePost :post="post" />
	</div>
</template>

<script>
import { onUpdated } from '@vue/runtime-core';
import SinglePost from '../components/SinglePost.vue';
export default {
	props: ['posts'],
	components: { SinglePost },
	setup(props) {
		console.log(props.posts);
		onUpdated(() => console.log('updated in posts list'));
	},
};
</script>

<style></style>
