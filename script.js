document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("bloodPressureChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        datasets: [
          {
            label: "Systolic",
            data: [120, 130, 125, 135, 140, 160],
            borderColor: "var(--unnamed-color-ff6200)",
            borderWidth: 2,
          },
          {
            label: "Diastolic",
            data: [80, 85, 90, 85, 90, 78],
            borderColor: "var(--unnamed-color-0bd984)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  });
  