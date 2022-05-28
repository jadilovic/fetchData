<template>
	<div>
		<router-link :to="{ name: 'post-details', params: { id: post.id } }">
			<h4>Title : {{ post.title }} Body: {{ body }} ID: {{ post.id }}</h4>
			<span v-for="tag in post.tags" :key="tag">#{{ tag + ' ' }} </span>
		</router-link>
	</div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
export default {
	props: ['post'],
	setup(props) {
		const body = computed(() => {
			return props.post.body.substring(0, 20) + '...';
		});
		onMounted(() => console.log('mounted'));
		onUpdated(() => console.log('updated'));
		onUnmounted(() => console.log('unmounted'));
		return { body };
	},
};
</script>

<style></style>
