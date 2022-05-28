import { ref } from 'vue';

const getPosts = () => {
	const errorMsg = ref(null);
	const posts = ref([]);

	const fetchedData = async () => {
		try {
			const data = await fetch('http://localhost:3000/posts');
			if (!data.ok) {
				throw Error('no data available');
			}
			posts.value = await data.json();
			console.log(posts.value);
		} catch (error) {
			errorMsg.value = error.message;
			console.log(errorMsg.value);
		}
	};

	return { errorMsg, posts, fetchedData };
};

export default getPosts;
