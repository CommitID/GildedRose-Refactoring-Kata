class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class NormalItem extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }
    updateItemSellIn() {
      this.sellIn--;
    }
  
    updateItemQuality() {
      if (this.quality > 1) {
        switch (true) {
          case this.sellIn <= 0:
            this.quality -= 2;
            break;
          default:
            this.quality -= 1;
            break;
        }
      } else {
        this.quality = 0;
      }
    }
  }
  
  class Backstage extends NormalItem {
    constructor(sellIn, quality, name = "Backstage") {
      super(name, sellIn, quality);
    }
  
    updateItemQuality() {
      switch (true) {
        case this.sellIn > 10:
          this.quality += 1;
          if (this.quality > 50) {
            this.quality = 50;
          }
          break;
        case this.sellIn <= 10 && this.sellIn > 5:
          this.quality += 2;
          if (this.quality > 50) {
            this.quality = 50;
          }
          break;
        case this.sellIn <= 5 && this.sellIn > 0:
          this.quality += 3;
          if (this.quality > 50) {
            this.quality = 50;
          }
          break;
        case this.sellIn <= 0:
          this.quality = 0;
          break;
      }
    }
  }
  
  class AgedBrie extends NormalItem {
    constructor(sellIn, quality, name = "Aged Brie") {
      super(name, sellIn, quality);
    }
  
    updateItemQuality() {
      switch (true) {
        case this.sellIn > 10:
          this.quality += 1;
          if (this.quality > 50) {
            this.quality = 50;
          }
          break;
        case this.sellIn <= 10 && this.sellIn > 5:
          this.quality += 2;
          if (this.quality > 50) {
            this.quality = 50;
          }
          break;
        case this.sellIn <= 5:
          this.quality += 3;
          if (this.quality > 50) {
            this.quality = 50;
          }
          break;
      }
    }
  }
  
  class Sulfuras extends NormalItem {
    constructor(sellIn, quality, name) {
      super(name, sellIn, quality);
    }
  
    updateItemSellIn() {
      this.sellIn;
    }
  
    updateItemQuality() {
      this.quality = 80;
    }
  }
  
  class Conjured extends NormalItem {
    updateItemQuality() {
      if (this.quality > 1) {
        switch (true) {
          case this.sellIn <= 0:
            this.quality -= 4;
            break;
          default:
            this.quality -= 2;
            break;
        }
      } else {
        this.quality = 0;
      }
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
  
    updateQuality() {
      this.items.forEach((item) => {
        item.updateItemQuality();
        item.updateItemSellIn();
      });
      return this.items;
    }
  }
  
  // const myShop = newShop([new Item("CAMEMBERT", 10, 15)]);
  
  module.exports = {
    Item,
    Shop,
    NormalItem,
    AgedBrie,
    Backstage,
    Sulfuras,
    Conjured,
  };