//FULL DOCUMENTATION
// LIST_FOLDERS
//CURL
curl -X POST https://api.dropboxapi.com/2/files/list_folder \
    --header "Authorization: Bearer sl.A2UnoNKsaaTzCyH32KFDOU8QwON65rUo0TxhFJKnyWcbqgGyX_pagOTDyAJUiIPt8pgoooUQgDv9XcJN6egIUFKgnXztggMbb45ObBYPlkxJWxQsBjw_qwHYDXMRePtvWp67kYI8" \
    --header "Content-Type: application/json" \
    --data "{\"path\": \"/Homework/math\",\"recursive\": false,\"include_media_info\": false,\"include_deleted\": false,\"include_has_explicit_shared_members\": false,\"include_mounted_folders\": true,\"include_non_downloadable_files\": true}"


//LIST_FOLDER/CONTINUE
//CURL

curl -X POST https://api.dropboxapi.com/2/sharing/list_folders/continue \
    --header "Authorization: Bearer sl.A2WK1ZGjY1djjI_UNGWjNUmnDVB1st9fm0fxuby_GmjsRDwWntvc5DQ6fmPtTgHL_-VbMB3aQHX8RYNypoDKdbIJem8978XR5IhxUEnZdoZ0YJfrj2Y_OlDclbqmwHeqPcPKftga" \
    --header "Content-Type: application/json" \
    --data "{\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"}"