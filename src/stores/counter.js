import { defineStore } from 'pinia'; // store를 정의하기 위해서 defineStore를 가져온다.

/*
 * 첫번째 파라미터로는 ID 값을 지정
 * -> 애플리케이션 전체에서 스토어에 고유한 아이디, Vue DevTools와 연결하는데 사용됨.
 *
 * 두번째 파라미터로는 스토어에 관련된 옵션을 정의
 */
export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 1,
	}),
	getters: {
		// getters도 actions와 마찬가지로 this로 접근 불가
		doubleCount: state => state.counter * 2,

		// getter에서 getter로 접근하는 법
		// 일반 함수를 정의 한 다음에 this를 통해서 instance에 접근해야함.
		doubleCountPlusOne() {
			return this.doubleCount + 1;
		},
	},
	actions: {
		// 화살표 함수로 정의하게 되면, 스토어 인스턴스에 접근 할 수 없다.
		// 화살표 함수 안에서 this를 사용할 때는 상위 스코프의 this에 영향을 받기 때문
		increment() {
			this.counter++;
		},
	},
});
