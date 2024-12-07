export function getInformation() {
    function mainProcessing() {
        const elements = document.getElementsByClassName("mb-16 bg-white p-16 desktop:rounded-8 desktop:py-24 desktop:px-40")
        for(let i = 0; i < elements.length; i++) {
            const imageSrc = elements[i].querySelector("img:first-child").getAttribute('src')
            const imagehref = elements[i].querySelector("a:first-child").getAttribute("href")
            console.log(imageSrc)
            console.log(imagehref)

            const fileNameGroup = elements[i].getElementsByClassName("mt-16 desktop:flex desktop:justify-between desktop:items-center")
            for(let j = 0; j < fileNameGroup.length; j++) {
                const fileName = fileNameGroup[j].getElementsByClassName("typography-14 !preserve-half-leading")
                const fileText = fileName[0].textContent
                console.log(fileText.replace(".zip", ""))
            }
        }
        const nextButton = document.getElementsByClassName("icon-arrow-open-right no-margin s-1x") as HTMLCollectionOf<HTMLButtonElement>
        if (nextButton.length === 0) {
            console.log("次のページは存在しません")
        } 
        else {
            nextButton[0].click()
        }
        
    }
    setTimeout(mainProcessing, 1000)
}