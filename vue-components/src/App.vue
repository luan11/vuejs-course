<template>
	<div>
		<AppHeader/>
		<CounterInfo/>
		<Counter/>
	</div>
</template>

<script>
/**
 * Registro local do component AppCounter.vue
 */

import AppHeader from './components/shared/AppHeader'
import Counter from './components/counter/Counter'
import CounterInfo from './components/counter/CounterInfo'

export default {
	components: {
		AppHeader,
		Counter,
		CounterInfo
	}
}
</script>