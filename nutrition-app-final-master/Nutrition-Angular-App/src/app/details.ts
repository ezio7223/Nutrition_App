export class userdetails{
    userName: string;
    email: string;
    fullName: string;
}
export class recdetails{
    fdcId: number;
    itemname: string;
    description: string;
}

export class Details{
    // description: string;
     fdcId: number;
     description: string;
     dataType: string;
     publicationDate: string;
     foodCode: string;
     foods: any;
}
export class FavoriteItems{
    id: string;
    userId: string;
    fdcId: number;
    itemName: string;
    description: string;
}
export class Food{
    // aggregations:any;
    // currentpage:number;
    // foodSearchCriteria:any;
    // foods:any;
    // pageList:any;
    // totalHites:number;
    // totalPages:number;
    description: string;
    foodNutrients: any;
    fdcId: number;
    foodCategory: string;
}
export class nutrient{
    id: number;
    name: string;
    number: string;
    rank: number;
    unitName: string;
}
export class Specific{
    // allHighlightFields:string;
    // brandName:string;
    // brandOwner : string;
    // dataType:string;
    // description:string;
    fdcId:number;
    // foodcategory:string;
    foodNutrients:any;
    // gtinUpc:str
// ingredients:string;
    // lowercaseDescription:string;
    // marketCountry:string;
    id: number;
    name: string;
    unitName: string;

}
export class FoodNutrients{
    // derivationCode: string;
    // nutrientId:number;
    nutrientName:string;
    unitName: string;
    // value: number;
    nutrient: nutrient;
    type: string;
    amount: number;
    dataPoints:number;
    max:number;
    min:number;
    median: number;
    minYearAcquired: number;
}
