export class ProducerState {
  constructor() {
    this.producerName = '';
  }

  setProducerName(name = '') {
    this.producerName = name;
  }
}

let producerState = null;

export const setState = (state) => {
  console.log('state', state)
  producerState = state;
};

export const getState = () => {
  console.log('getStaet', producerState);
  producerState
};
