import { useEffect, useRef } from 'react';
import L from 'leaflet';

const CustomMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null); // Menyimpan instance peta

  useEffect(() => {
    // Cek apakah peta sudah ada
    if (mapRef.current && !mapInstance.current) {
      // Inisialisasi peta hanya sekali
      mapInstance.current = L.map(mapRef.current,{
        center: [50, 1], // Posisi peta (untuk memberi pusat peta sementara)
        zoom: 5,
        zoomControl: true, // Menonaktifkan kontrol zoom
        attributionControl: false ,// Menonaktifkan logo ukraine
        maxZoom: 13, // Jika perlu batasi zoom maksimal
      minZoom: 1 // Jika perlu batasi zoom minimal
      })

    
      // Menambahkan Layer Tile (Basemap)
      // Menambahkan Gambar sebagai Image Overlay
      const imageUrl = '/depok.jpg'; // Path relatif gambar yang ada di dalam folder public
     
      L.imageOverlay(imageUrl,L.latLngBounds([[40, -20.0], [60.0, 30.0]]) ).addTo(mapInstance.current); // Menambahkan gambar ke peta

      // Menambahkan Marker di atas gambar
       // Koordinat untuk marker (sesuaikan dengan gambar kamu)
      const marker = L.marker([45,4]).addTo(mapInstance.current);
      marker.bindPopup( `<style>h1{color:red;}</style><h1>Kecamatan</h1>
        <p>Cilodong</p>
        
        `);
        const marker2 = L.marker([47,10]).addTo(mapInstance.current);
      marker2.bindPopup( `<style>h1{color:red;}</style><h1>Kecamatan</h1>
        <p>Tapos</p>
        
        `);
      const marker3= L.marker([45.6,-3]).addTo(mapInstance.current);
      marker3.bindPopup( `<style>h1{color:red;}</style><h1>Kecamatan</h1>
        <p>Cipayung</p>
        
        `);
    }
  }, []); // Hanya jalankan sekali saat komponen pertama kali dirender

  return (
    <div>
      <h2>Peta dengan Gambar Kustom</h2>
      <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default CustomMap;
