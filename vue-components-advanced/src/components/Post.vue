<template>
	<div class="post">
		<div class="post-header">
			<slot name="post-header"></slot>
		</div>
		<div class="post-content">
			<slot></slot>
		</div>
		<div class="post-footer">
			<slot name="post-footer"></slot>
			<a href="#" class="link">
				<slot name="button">
					Ler mais
				</slot>
			</a>
		</div>
	</div>
</template>

<script>
/* export default {
	props: {
		title: String
	}
} */
</script>

<style scoped>
	.post {
		margin: 15px auto;
	}

	.post-header {
		padding: 5px 12px;
		background-color: #eee;
	}

	.post-content {
		font-size: 16px;
	}

	.post-footer {
		font-style: italic;
	}

	.link {
		float: right;
	}
</style>