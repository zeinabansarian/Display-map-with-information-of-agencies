const branches = [
  {
    name: "Representation 1",
    lat:51.505679785216245,
    lng:-0.1380352707138376,
    
    address: "london , Street1 ",
    phone: "123456789",
  },
  {
    name: "Representation 2",
    lat: 51.502121829763254,
    lng: -0.114150782705109,
    
    address: "london , Street2",
    phone: "987654321",
  },
  {
    name: "Representation 3",
    lat: 51.51330304004383,
    lng:-0.10669963901007828,

    address: "london , Street3",
    phone: "456789123",
  },
];


const map = L.map("map").setView([51.50575112697316,-0.12720011872679757],12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:18,
}).addTo(map);

branches.forEach(branch => {
    const marker = L.marker([branch.lat , branch.lng]).addTo(map);
    marker.on("click",()=>{
        showInfo(branch)
    })
});

function showInfo(branch) {
    document.getElementById("info").innerHTML=`
    <div class="info-item">
    <h3>${branch.name}</h3>
    <p>
    <strong>Address:</strong>
    ${branch.address}
    </p>
    <p>
    <strong>Phone:</strong>
    ${branch.phone}
    </p>

    </div>
    `
}