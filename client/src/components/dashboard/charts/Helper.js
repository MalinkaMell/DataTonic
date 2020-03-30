
export const helper = (action, dataset) => {
  //extract hours from transactions dates
  const h = action.map(item => new Date(item).getHours());

  //checking if i have a transaction at that hour, adding it to dataset object if i do
  for (let i = 0; i < 24; i++) {
    h.map(hour => {
      if (hour === i && hour < i + 1) {
        dataset.map((item => item.t === i && item.y++))
      }
    })
  }
}

export const labels = ["3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm", "12:00 am"];