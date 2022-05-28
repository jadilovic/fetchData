import { ref } from 'vue';

const getPost = (id) => {
	const errorMsg = ref(null);
	const post = ref({});
	console.log(id);
	const fetchedData = async () => {
		try {
			const data = await fetch('http://localhost:3000/posts/' + id);
			if (!data.ok) {
				throw Error('no data available');
			}
			post.value = await data.json();
			// const filteredPost = posts.filter((post) => post.id === Number(id));
			console.log(post.value);
		} catch (error) {
			errorMsg.value = error.message;
			console.log(errorMsg.value);
		}
	};

	return { errorMsg, post, fetchedData };
};

export default getPost;
