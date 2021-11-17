var {Shop, Item} = require('../src/gilded_rose.js');

describe('Gilded Rose', () => {

  it("should foo",() => {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

describe('Legendary objects (Sulfuras, Hand of Ragnaros)', () => {
  
})

describe('Backstage passes', () => {
  it('should decrease the sellIn of the object', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });



  it('should decrease the quality if the sell by date is bigger than 10', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it('should increase the quality by 2 if it remains 10 days or lower', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  });

  it('should increase the quality by 3 if it remains 5 days or lower', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it('should increase the quality by 3 if it remains 1 day', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it('should increase the quality by 3 if it remains 5 days or lower', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it('should never increase the quality over 50 if it remains 10 days or lower', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });

  it('should never increase the quality over 50 if it remains 5 days or lower', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });

  it('should set the quality to 0 after the date of the concert', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  });
})

describe('Aged Brie', () => {
  it('should decrease the sellIn of the object', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
  });

  it('should increase the quality after update', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 20, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
  });

  it('should never increase the quality two times faster if the sell by date has past', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4)
  });

  it('should never increase the quality over 50', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 20, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });
  
  
  
})



