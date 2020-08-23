<template>
	<div class="post">
		<div class="post-header">
			<slot name="post-header"></slot>
		</div>
		<div class="post-content">
			<slot name="post-content"></slot>
		</div>
		<div class="post-footer">
			<slot name="post-footer"></slot>
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
</style>