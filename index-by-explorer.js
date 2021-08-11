// EXPLORER
// LIST_FOLDERS
// CURL
curl -X POST https://api.dropboxapi.com/2/files/list_folder \
  --header 'Authorization: Bearer sl.A2Vd4NpZ3ngNS1GYBrdXzakj0Cl6XHKPb4XsDv1x7UCsJ4Bd_Np0BY7MqIQDhE_K_Gy5JtrooeeqqssgLb9C2x42XyCK77Y54_OOvsxBk4gT2g6QSqYcSneyED4mMFDVMJ1x4Vjh' \
  --header 'Content-Type: application/json' \
  --data '{"path":"/Agrotecnica"}'

// LIST_FOLDERS_CONTINUE

// HTTP REQUEST
POST /2/files/list_folder/continue
Host: https://api.dropboxapi.com
User-Agent: api-explorer-client
Authorization: Bearer sl.A2Vd4NpZ3ngNS1GYBrdXzakj0Cl6XHKPb4XsDv1x7UCsJ4Bd_Np0BY7MqIQDhE_K_Gy5JtrooeeqqssgLb9C2x42XyCK77Y54_OOvsxBk4gT2g6QSqYcSneyED4mMFDVMJ1x4Vjh
Content-Type: application/json

{
    "cursor": "AAHDQaXaJqQKeSTLU0CqTTPwWcJYRIDNwM3Ns1GYDmgH327mM3odoMiF4IN48TMuhjhugC0IRpnVIzwIwYj378SXsMLXq0cVdumuqox2irr7LIpXW8m_R12rlkjQAV5bEuDvRluwfN59TRUAe4Y1F6GyZ2MB05Q46A1yOF8S0x4T0W2CIMdAEyRvDGmXwjVb5qYu_rbVwh-VEqTT1dZDiWUk"
}

// CURL
curl -X POST https://api.dropboxapi.com/2/files/list_folder/continue \
  --header 'Authorization: Bearer sl.A2Vd4NpZ3ngNS1GYBrdXzakj0Cl6XHKPb4XsDv1x7UCsJ4Bd_Np0BY7MqIQDhE_K_Gy5JtrooeeqqssgLb9C2x42XyCK77Y54_OOvsxBk4gT2g6QSqYcSneyED4mMFDVMJ1x4Vjh' \
  --header 'Content-Type: application/json' \
  --data '{"cursor":"AAHDQaXaJqQKeSTLU0CqTTPwWcJYRIDNwM3Ns1GYDmgH327mM3odoMiF4IN48TMuhjhugC0IRpnVIzwIwYj378SXsMLXq0cVdumuqox2irr7LIpXW8m_R12rlkjQAV5bEuDvRluwfN59TRUAe4Y1F6GyZ2MB05Q46A1yOF8S0x4T0W2CIMdAEyRvDGmXwjVb5qYu_rbVwh-VEqTT1dZDiWUk"}'