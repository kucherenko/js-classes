export function FlowersService() {
    let flowers = [
        {name: "Rose"},
        {name: "Chamomile"},
        {name: "Peony"},
        {name: "Rose 1"}
    ];
    return {
        getFlowers: () => flowers
    }
}