<template>
	<h1>Post Details</h1>
	<div v-if="errorMsg">{{ errorMsg }}</div>
	<div v-else>
		Post: {{ post.title }}
		<p>{{ post.body }}</p>
	</div>
</template>

<script>
import getPost from '../composables/getPost';
export default {
	props: ['id'],
	setup(props) {
		console.log(props.id);
		const { post, errorMsg, fetchedData } = getPost(props.id);
		fetchedData();
		return { post, errorMsg };
	},
};
</script>

<style></style>
