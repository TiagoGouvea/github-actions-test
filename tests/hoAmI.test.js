import hoAmI from "../hoAmI";

test('Data should return something', () => {
    const data = hoAmI();
    expect(data).toBeTruthy();
});

test('Must fail this test', () => {
    expect(false).toBeTruthy();
});
