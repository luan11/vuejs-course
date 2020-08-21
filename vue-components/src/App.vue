<template>
	<div>
		<AppHeader/>
		<Counter/>
	</div>
</template>

<script>
/**
 * Registro local do component AppCounter.vue
 */

import AppHeader from './components/shared/AppHeader'
import Counter from './components/counter/Counter'

export default {
	components: {
		AppHeader,
		Counter
	}
}
</script>