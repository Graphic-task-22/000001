import * as THREE from 'three';

// 创建Points几何体
const geometry = new THREE.SphereGeometry(10, 10, 10);


// 创建Points材质
const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });

// 创建Points粒子系统
const points = new THREE.Points(geometry, pointsMaterial);

export default points;