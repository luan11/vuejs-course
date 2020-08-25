<template>
	<div>
		<h2>Posts list</h2>

		<PostsListItem
			v-for="post in posts"
			:key="post.id"
			:post="post"
		>
			<slot :myPost="post"></slot>
		</PostsListItem>
	</div>
</template>

<script>
import PostsListItem from './PostsListItem'

export default {
	components: {
		PostsListItem
	},
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>