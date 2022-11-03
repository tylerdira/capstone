puts 'seeding Homeowners'
Homeowner.create!(
    first_name: 'Joe',
    last_name: 'Mamma',
    email: 'joemamma@mail.com', 
    password_digest: 'password',
    phone_number: '1231231234',
    secondary_phone_number: '4564564567',
    role: 'Homeowner')
Homeowner.create!(
    first_name: 'Mike',
    last_name: 'Oxlong',
    email: 'mikeoxlong@mail.com', 
    password_digest: 'password',
    phone_number: '7897897897',
    secondary_phone_number: '9879879877',
    role: 'Homeowner')
Homeowner.create!(
    first_name: 'Heywood',
    last_name: 'Jablowme',
    email: 'heywoodjablowme@mail.com', 
    password_digest: 'password',
    phone_number: '6546546544',
    secondary_phone_number: '3213213211',
    role: 'Homeowner')



puts 'seeding Homes'
Home.create!(
    address: '1234 Apple St.',
    city: 'Las Vegas',
    state: 'NV',
    zip_code: 89135,
    job_start_image: 'image.jpg',
    homeowner_id: 2
)
Home.create!(
    address: '5678 Bananna Ave.',
    city: 'Las Vegas',
    state: 'NV',
    zip_code: 89102,
    job_start_image: 'image.jpg',
    homeowner_id: 3
)
Home.create!(
    address: '9012 Orange Dr.',
    city: 'Las Vegas',
    state: 'NV',
    zip_code: 89125,
    job_start_image: 'image.jpg',
    homeowner_id: 2
)
Home.create!(
    address: '3456 Melon Blvd.',
    city: 'Las Vegas',
    state: 'NV',
    zip_code: 89129,
    job_start_image: 'image.jpg',
    homeowner_id: 3
)


puts 'seeding Companies'
Company.create!(
  name: 'Walmart',
  email: 'walmart@mail.com',
  password_digest: 'password',
  phone_number: '123',
  role: 'Company'
)
Company.create!(
  name: 'Target',
  email: 'target@mail.com',
  password_digest: 'password',
  phone_number: '321',
  role: 'Company'
)


puts 'seeding Technicians'
Technician.create!(
    first_name: 'Tyler',
    last_name: 'dira',
    email: 'tylerdira@mail.com',
    password_digest: 'password',
    phone_number: '1591591591',
    profession: 'Plumber',
    role: 'Technician',
    company_id: 1
)
Technician.create!(
    first_name: 'Emily',
    last_name: 'Ann',
    email: 'emilyann@mail.com',
    password_digest: 'password',
    phone_number: '9519519519',
    profession: 'Roofer',
    role: 'Technician',
    company_id: 1
)
Technician.create!(
    first_name: 'Axel',
    last_name: 'German',
    email: 'axelgerman@mail.com',
    password_digest: 'password',
    phone_number: '7417417417',
    profession: 'HVAC',
    role: 'Technician',
    company_id: 2
)


puts 'seeding job tasks'
JobTask.create!(
    status: 'In progress',
    description: 'Broken sink',
    completed?: false,
    technician_id: 1,
    home_id: 1
)
JobTask.create!(
    status: 'Not started',
    description: 'Dirty dishwasher',
    completed?: false,
    technician_id: 2,
    home_id: 2
)
JobTask.create!(
    status: 'In progress',
    description: 'Missing duck',
    completed?: false,
    technician_id: 3,
    home_id: 3
)
JobTask.create!(
    status: 'Complete',
    description: 'child trapped in oven',
    completed?: true,
    technician_id: 1,
    home_id: 4
)
JobTask.create!(
    status: 'Complete',
    description: 'ur mom',
    completed?: true,
    technician_id: 2,
    home_id: 1
)

puts 'Done seeding!'