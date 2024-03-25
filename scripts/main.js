import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoice } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async() => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await LocationTypeChoice()
    const buttonHTML =  await SaveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = 
                `${jeanOwnershipHTML}
                  ${locationsHTML}
                  ${buttonHTML}
                  ${submissionListHTML}`

}
document.addEventListener("newSubmissionCreated", render)
render()