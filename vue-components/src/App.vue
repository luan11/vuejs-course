<template>
	<div>
		<AppHeader/>
		<AppCounter/>
	</div>
</template>

<script>
/**
 * Registro local do component AppCounter.vue
 */

import AppCounter from './AppCounter'
import AppHeader from './AppHeader'

export default {
	components: {
		AppCounter,
		AppHeader
	}
}
</script>