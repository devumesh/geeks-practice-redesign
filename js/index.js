const problemContainer = document.querySelector('.problem__container');

const problemDisplay = () => 
{
    return `<div class="col-12 col-lg-6 col-xl-4 mb-3 problem__card">
        <div class="card-body bg-white rounded-3">
            <h5 class="card-title">Maximum XOR subarray</h5>
            <p class="card-subtitle mb-2 text-muted">Topic Tags: <span class="text-success">Trie</span></p>
            <div class="problem__badge mb-3">
                <span class="badge bg-success">Amazon</span>
            </div>
            <div class="card-text mb-0 text-muted card__status__bar">
                <span>Difficulty</span>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Submission</span>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 3%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Accuracy</span>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 42.6%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>`
};

for (let i = 0; i < 20; i++)
{
    problemContainer.insertAdjacentHTML('beforeend', problemDisplay());
}