import { Card } from './card.model';

describe('Card', () => {
  it('should create an instance', () => {
    expect(new Card("text1", "text2")).toBeTruthy();
  });
});
