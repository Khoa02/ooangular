let data = [
  {
    "id": "tasks",
    "EN": {
      "title": "Tasks",

      "items": ["Task List", "Verify", "Đăng ký [Eng]", "Lịch tuần mẫu [Eng]", "Địa điểm [Eng]"]

    },
    "VN": {
      "title": "Công Việc",
      "items": ["Danh Sách Công Việc", "Lịch tuần mẫu", "Địa điểm"]
    },
    'routing': [
      '/task-list',
      '',
      '',
      '',
      ''
    ],
    'icon': 'uil-database-alt'
  },
  {
    "id": "event",
    "EN": {
      "title": "Event",
      "items": [
        "Event list",
        "New event",
        "Event Sample"
      ]
    },
    "VN": {
      "title": "Lịch tuần",
      "items": [
        "Danh sách lịch",
        "Đăng ký lịch",
        "Lịch tuần mẫu"
      ]
    },
    "routing": [
      '/event-list',
      '/new-event',
      '/event-sample'
      

    ],
    'icon': 'uil-calendar-alt'
  },
  {
    "id": "client",
    "EN": {
      "title": "Client",
      "items": [
        "Contract",
        "Catalog",
        "Report",
        "Search",
      ]
    },
    "VN": {
      "title": "Khách hàng",
      "items": [
        "Hợp đồng",
        "Danh mục",
        "Báo cáo",
        "Tìm kiếm"
      ]
    },
    "routing": [
      '/contract',
      '/catalog',
      '/report',
      '/search'

    ],
    'icon': 'uil-users-alt'
  },
  {
    "id": "social",
    "EN": {
      "title": "Cong Thong Tin [Eng]",
      "items": [
        "Notification",
        "Library",
        "News",
        "Images",
        "Contact",
        "Survey"
      ]
    },
    "VN": {
      "title": "Cổng Thông Tin",
      "items": [
        "Thông báo",
        "Thư Viện",
        "Tin tức",
        "Hình ảnh",
        "Danh bạ",
        "Thăm dò khảo sát"
      ]
    },
    "routing": [
      '/notification',
      '/library',
      '/news',
      '/images',
      '/contact',
      '/survey'
    ],
    'icon': 'uil-globe'
  }
];

export default data;
