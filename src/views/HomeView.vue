<template>
	<div class="home">home</div>
	<p ref="p">My name is {{ ninjaOne.name }} and age is {{ ninjaOne.age }}</p>
	<button @click="handleClick">click me</button>
	<input type="text" v-model="ninjaOne.name" />
	<button @click="ninjaOne.age++">increase age</button>
	<div class="home">reactive</div>
	<p ref="p">My name is {{ ninjaTwo.name }} and age is {{ ninjaTwo.age }}</p>
	<button @click="handleReactive">click me reactive</button>
	<input type="text" v-model="ninjaTwo.name" />
	<button @click="ninjaTwo.age++">increase age</button>
	<div class="home">Search</div>
	<div>
		<button @click="handleStop">Stop All Watch</button>
	</div>
	<input type="text" v-model="search" />
	<p>Search term : {{ search }}</p>
	<div v-for="name in matchingNames" :key="name">{{ name }}</div>
	<div><button @click="show = !show">toggle posts</button></div>
	<div><button @click="posts.pop()">Delete Post</button></div>

	<div v-if="show && posts.length">
		<PostsList :posts="posts" />
	</div>
	<div v-else><h1>Loading...</h1></div>
	<div v-if="errorMsg">{{ errorMsg }}</div>
</template>

<script>
import { reactive, ref, computed, watch, watchEffect } from 'vue';
import PostsList from '../components/PostsList.vue';
import getPosts from '../composables/getPosts';
export default {
	name: 'HomeView',
	components: {
		PostsList,
	},
	setup() {
		console.log('setup');
		const ninjaOne = ref({ name: 'Mark', age: 55 });
		const ninjaTwo = reactive({ name: 'Cuckerberg', age: 25 });
		const show = ref(true);
		const names = ref([
			'Aki',
			'Boby',
			'Mia',
			'Bia',
			'Sun',
			'Moon',
			'Rock',
			'Mark',
		]);
		const { posts, errorMsg, fetchedData } = getPosts();
		fetchedData();

		// const posts = ref([
		// 	// {
		// 	// 	title: 'boby',
		// 	// 	body: 'my dog loremipsum ddff dfdfsdf dfdsdf dddf ddfdf dddf ddfd ddffd ddfdf',
		// 	// 	id: 1,
		// 	// },
		// 	// { title: 'cuni', body: 'my cat', id: 2 },
		// 	// { title: 'aki', body: 'my monkey', id: 3 },
		// 	// { title: 'adi', body: 'my girafe', id: 4 },
		// ]);

		// fetch('http://localhost:3000/posts')
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		posts.value = data;
		// 	})
		// 	.catch((err) => console.log(err.message));

		const search = ref('');
		// const name = ref('Aki');
		// const age = ref(45);
		// let name = 'Aki';
		// let age = 43;
		// const p = ref(null);
		// console.log(p, p.value);

		const handleClick = () => {
			ninjaOne.value.age = 44;
			// name.value = 'Boby';
			// age.value = 35;
			// console.log(p, p.value);
			// p.value.classList.add('test');
			// p.value.textContent = 'Changed text';
		};

		const handleReactive = () => {
			ninjaTwo.name = 'Cuni';
		};

		const matchingNames = computed(() => {
			return names.value.filter((name) =>
				name.toLowerCase().includes(search.value.toLowerCase())
			);
		});

		const stopWatch = watch(search, () => {
			console.log('watch on search change');
		});

		const stopEffect = watchEffect(() => {
			console.log('watch effect', search.value);
		});

		const handleStop = () => {
			stopWatch();
			stopEffect();
		};

		// const handlePosts = () => {
		// 	show.value = !show.value;
		// };
		// return { name, age, handleClick };
		return {
			ninjaOne,
			ninjaTwo,
			search,
			matchingNames,
			handleClick,
			handleReactive,
			handleStop,
			posts,
			// handlePosts,
			show,
			errorMsg,
		};
	},
};
</script>
