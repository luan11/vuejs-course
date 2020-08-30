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
	props: {
		label: String,
		value: [Number, String],
		inputClasses: [String, Object, Array]
	},
	data() {
		return {
			currentValue: this.value || this.$attrs.min	
		}
	},
	computed: {
		customLabel() {
			return `${this.label} (R$ ${this.currentValue})`
		}
	},
	methods: {
		update(event) {
			const value = event.target.value;

			this.$emit('input', value);

			this.currentValue = value;
		}
	},
	created() {
		console.log(this.$attrs);
	}
}
</script>