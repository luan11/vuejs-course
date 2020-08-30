<template>
	<div>
		<label>{{ customLabel }}</label>
		<input 
			type="range"
			v-bind="$attrs"
			:value="value"
			:class="inputClasses"
			@input="update"	
		>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	/* model: {
		prop: 'value',
		event: 'input'
	}, */
	props: {
		label: String,
		value: [Number, String],
		inputClasses: [String, Object, Array]
	},
	computed: {
		customLabel() {
			return `${this.label} (R$ ${(this.value || this.$attrs.min).toLocaleString('pt-BR')})`
		}
	},
	methods: {
		update(event) {
			const value = event.target.value;

			this.$emit('input', value);
		}
	},
	created() {
		console.log(this.$attrs);
	}
}
</script>