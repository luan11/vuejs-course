<template>
	<div>
		<h3 class="font-weight-light">State animations</h3>

		<div class="form-group">
			<input type="number" class="form-control"
				v-model="number"
				step="50"
			>
		</div>

		<div class="alert alert-info">
			<h3 class="font-weight-light"><strong>Number: </strong> <span>{{ animatedNumber }}</span></h3>
		</div>
	</div>
</template>

<script>
import { TweenLite } from 'gsap';

export default {
	data() {
		return {
			number: 0,
			tweenedNumber: 0
		};
	},
	computed: {
		animatedNumber() {
			return this.tweenedNumber.toFixed(0);
		}
	},
	watch: {
		number(newNumber) {
			TweenLite.to(this.$data, 1, {
				tweenedNumber: newNumber
			});
		}
	}
}
</script>