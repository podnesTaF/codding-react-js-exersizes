// 'https://www.algoexpert.io/api/fe/questions'

import axios from "axios";
import {ICategory, IElement, Status} from "../App";

export const getData = async () => {
    const {data} = await axios.get<IElement[]>('data.json')
    const submissions = await getSubmissions()
    return data.map((el: IElement) => {
        const submission = submissions.find((sub: any) => sub.questionId === el.id)
        return {...el, status: submission?.status || undefined}
    })

}

export const getSubmissions = async () => {
    const {data} = await axios.get("submissions.json")
    return data
}

export const countedCategories = (elements: IElement[]): ICategory[] => {
    const categories = elements.map(el => el.category)
    const countedCat: any = []
    let uniqueCat: any = []
    for(let i = 0; i < categories.length; i++) {
        if(!uniqueCat.includes(categories[i])) {
            uniqueCat.push(categories[i])
        }
    }
    for(let i = 0; i < uniqueCat.length; i++) {
        const content = elements.filter(el => el.category === uniqueCat[i])
        countedCat.push({name: [uniqueCat[i]], content})
    }

    return countedCat
}

export const randomCategories = (elements: IElement[]): ICategory[] => {
    const randomOrderedElements: IElement[] = []
    for(let i = 0; i < elements.length; i++) {
        let randomIndex = Math.floor(Math.random() * elements.length)
        let isUnique = !randomOrderedElements.find(el => el.id === elements[randomIndex].id)
        while (!isUnique) {
            randomIndex = Math.floor(Math.random() * elements.length)
            isUnique = !randomOrderedElements.find(el => el.id === elements[randomIndex].id)
        }
        if(isUnique) {
            randomOrderedElements.push(elements[randomIndex])
        }
    }

    const randomCategories: ICategory[] = []
    const randomNumbers = generateRandomNumbers(randomOrderedElements.length)
    console.log(randomNumbers)
    for(let i = 0; i < 4; i++) {
        randomCategories.push({name: `Column ${[i + 1]}`, content: randomOrderedElements.slice(randomNumbers[i - 1] || 0, randomNumbers[i] + (randomNumbers[i - 1] || 0))})
    }

    return randomCategories
}

function generateRandomNumbers(length: number) {
    let numbers = [];
    let sum = 0;

    while (sum < length && numbers.length < 4) {
        let rand = Math.floor(Math.random() * 4) + 5;
        numbers.push(rand);
        sum += rand;
    }



    let difference = length - sum;
    numbers[numbers.length - 1] += difference;
    console.log(sum, difference)
    return numbers;
}

export const defineClass = (status?: Status) => {
    if(status === Status.correct) {
        return 'correct'
    } else if (status === Status.incorrect) {
        return 'incorrect'
    } else if(status === Status.partially) {
        return 'partially-correct'
    }
    return ''
}

export const getCorrectNum = (content: IElement[]) => {
    const correctNum = content.filter((el: IElement) => el.status === Status.correct).length
    return correctNum
}