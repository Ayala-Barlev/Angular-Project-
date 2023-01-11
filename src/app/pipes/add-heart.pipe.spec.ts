import { AddHeartPipe } from './add-heart.pipe';

describe('AddHeartPipe', () => {
  it('create an instance', () => {
    const pipe = new AddHeartPipe();
    expect(pipe).toBeTruthy();
  });
});
