import { Patent } from '@/types';

export const mockPatents: Patent[] = [
  {
    id: '1',
    title: '인공지능 기반 이미지 인식 시스템 및 방법',
    applicationNumber: 'KR-10-2023-0001234',
    publicationNumber: 'KR-10-2024-0005678',
    applicant: '삼성전자 주식회사',
    inventor: '김철수, 이영희',
    applicationDate: '2023-01-15',
    publicationDate: '2024-05-20',
    abstract: '본 발명은 인공지능 기반 이미지 인식 시스템 및 방법에 관한 것으로, 딥러닝 알고리즘을 활용하여 다양한 객체를 실시간으로 인식하고 분류할 수 있는 기술을 제공한다.',
    claims: [
      '딥러닝 모델을 이용한 이미지 전처리 단계',
      '객체 검출 및 분류 알고리즘',
      '실시간 인식을 위한 최적화 기법',
    ],
    ipcCode: 'G06N 3/08',
    similarityScore: 95,
  },
  {
    id: '2',
    title: '블록체인 기반 데이터 보안 시스템',
    applicationNumber: 'KR-10-2023-0002345',
    publicationNumber: 'KR-10-2024-0006789',
    applicant: 'SK하이닉스 주식회사',
    inventor: '박민수, 정다영',
    applicationDate: '2023-02-20',
    publicationDate: '2024-06-15',
    abstract: '본 발명은 블록체인 기술을 활용한 데이터 보안 시스템에 관한 것으로, 분산 원장 기술을 통해 데이터의 무결성과 보안성을 보장하는 방법을 제공한다.',
    claims: [
      '블록체인 네트워크 구성 방법',
      '스마트 컨트랙트 기반 데이터 검증',
      '암호화 및 복호화 프로세스',
    ],
    ipcCode: 'H04L 9/06',
    similarityScore: 88,
  },
  {
    id: '3',
    title: '자율주행 차량의 장애물 회피 시스템',
    applicationNumber: 'KR-10-2023-0003456',
    publicationNumber: 'KR-10-2024-0007890',
    applicant: '현대자동차 주식회사',
    inventor: '최준호, 강서연',
    applicationDate: '2023-03-10',
    publicationDate: '2024-07-25',
    abstract: '본 발명은 자율주행 차량의 장애물 회피 시스템에 관한 것으로, 다양한 센서를 통해 실시간으로 주변 환경을 감지하고 안전한 경로를 계산하는 기술을 제공한다.',
    claims: [
      'LiDAR 및 카메라 기반 센서 융합',
      '실시간 경로 계획 알고리즘',
      '긴급 회피 제어 시스템',
    ],
    ipcCode: 'B60W 30/08',
    similarityScore: 82,
  },
  {
    id: '4',
    title: '5G 네트워크 최적화를 위한 빔포밍 기술',
    applicationNumber: 'KR-10-2023-0004567',
    publicationNumber: 'KR-10-2024-0008901',
    applicant: 'LG전자 주식회사',
    inventor: '윤지혜, 임동현',
    applicationDate: '2023-04-05',
    publicationDate: '2024-08-10',
    abstract: '본 발명은 5G 네트워크 환경에서의 빔포밍 기술에 관한 것으로, 대규모 MIMO 시스템을 활용하여 신호 전송 효율을 극대화하는 방법을 제공한다.',
    claims: [
      '적응형 빔포밍 알고리즘',
      '다중 사용자 MIMO 지원',
      '간섭 제거 기술',
    ],
    ipcCode: 'H04B 7/06',
    similarityScore: 78,
  },
  {
    id: '5',
    title: '웨어러블 디바이스를 이용한 건강 모니터링 시스템',
    applicationNumber: 'KR-10-2023-0005678',
    publicationNumber: 'KR-10-2024-0009012',
    applicant: '네이버 주식회사',
    inventor: '한상우, 오민지',
    applicationDate: '2023-05-12',
    publicationDate: '2024-09-18',
    abstract: '본 발명은 웨어러블 디바이스를 활용한 건강 모니터링 시스템에 관한 것으로, 생체 신호를 실시간으로 측정하고 분석하여 건강 상태를 관리하는 기술을 제공한다.',
    claims: [
      '생체 신호 센서 통합',
      'AI 기반 건강 데이터 분석',
      '클라우드 기반 데이터 관리',
    ],
    ipcCode: 'A61B 5/00',
    similarityScore: 75,
  },
  {
    id: '6',
    title: '양자 암호화 통신 시스템',
    applicationNumber: 'KR-10-2023-0006789',
    publicationNumber: 'KR-10-2024-0010123',
    applicant: '카카오 주식회사',
    inventor: '서진우, 송하은',
    applicationDate: '2023-06-20',
    publicationDate: '2024-10-05',
    abstract: '본 발명은 양자 암호화 기술을 이용한 통신 시스템에 관한 것으로, 양자 키 분배 프로토콜을 통해 절대적인 보안성을 제공하는 방법을 개시한다.',
    claims: [
      '양자 키 분배(QKD) 프로토콜',
      '양자 상태 측정 및 검증',
      '도청 탐지 알고리즘',
    ],
    ipcCode: 'H04L 9/08',
    similarityScore: 70,
  },
];

export const getRandomPatents = (count: number): Patent[] => {
  const shuffled = [...mockPatents].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const searchPatents = (query: string): Patent[] => {
  if (!query) return mockPatents;
  
  const lowerQuery = query.toLowerCase();
  return mockPatents.filter(patent => 
    patent.title.toLowerCase().includes(lowerQuery) ||
    patent.abstract.toLowerCase().includes(lowerQuery) ||
    patent.applicant.toLowerCase().includes(lowerQuery)
  );
};

