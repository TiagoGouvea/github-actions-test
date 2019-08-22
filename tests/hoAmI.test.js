import hoAmI from "../hoAmI";

test('Data should return something', () => {
    const data = hoAmI();
    expect(data).toBeTruthy();
});

test('Must success this test', () => {
    expect(true).toBeTruthy();
});
