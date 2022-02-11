const mixedMessages = () =>{
    const firstLine = ['Wie is de mol','Trust no one','Zit je te mollen?'];
    const secondLine = ['Mollenstreken','Ik wil een joker', 'Win een vrijstelling'];
    const thirdLine = ['De zwarte vrijstelling', 'Molgeld', 'Kandidaats gedrag'];
    let arrayLength = '';
    const randomSelect = array =>{
        arrayLength = length.array;
        let randomLine = array[Math.floor(Math.random()*arrayLength)];
        return randomLine;
    }
    const randomOne = randomSelect(firstLine);
    const randomTwo = randomSelect(secondLine);
    const randomThree = randomSelect(thirdLine);
}
