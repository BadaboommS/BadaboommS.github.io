const copyCode = async() =>{
  let text = `eNrtfW1T3EbW6OfMr1BRtfeLsel3tXydfQoDxiRgE8B2sl9SLanFaK2RsKTBJk_tf7-nW5oZSUjDDAxZJ5fNFobW6dPdp897v736n2-TxLnWeRFn6Y9b-AXacnQaZGGcXv649eHizXO59T__HL06VeX4ffR6Gifmyz9HP7yyvzuJvtYJ1ENQr1T5pS4_znDR36HsSqXlWGfpifp3lh9m4Y9b77JUbzm-SsO4nP0VJKoo3qmJ_nHrROVqGup8y1FFoNNwb_FpbxzrqFRxChXGABaUOj827e9Oy-wkCwEkUkkB-CYAdJ4Fn3V5mGfTqx-32JZzHeuvFdDF2cFBo2dx2uwZDO2HV6eJutH5ealKp4AfP27tAoXUpd5XE_gJuFQyBUSeFAIR7wXlXBJCtnaWVn49zYvyFgYXCU5fcMIo_DuE4fxK63BR6YUkcgj0NNcHUaSDMr7We3lc7o1VGiwaxOQF40N17wN_Mk3K-CqJzYzN6gzBv72NHvhmAPgiK1Wyf3q-GLbwBKVUvODIQ2R5taycVxts4FNcjl8nQNj1GzFVjy7TuNT3q3uaxUWW3n9wzZqD49ubJgnI6kqwZ7rQ-bUq43avhnFnEz9O70O63Vyr91HFomcqjKfFiS5zXczR0BeD_HOiUrWXFYu5dZdBnuocFEjZqoDuqHCugwx0TrMKdl9gz1uhof7qgy0ex5FeHXKtwdQV1u3N_cZxcL4q3NqI79ehM1Cwq0GeZ9NkRchyod5AVQ-L0ZcmJOaDfLOvvy3AJF6CsAU5jPAoXQyDiCWC_qUJubSH15nRB41uLtfVB29PF7AecjF6wTBzXSaGjdX4pogDlZyob_FkOgH7cKE-60WTAnO-hGUvx2UKGm6oNmYYe4PG602c68Ga0G-yRPkl4T1rjlVWDFWN02hYy8TpW_CYdoNgCn7PzbwOo2xQB76PooE61FumBu624-COBC8N6FEaLJhOLkP6Ic2tiWm4MXgZ_BkIvHGb_ESvVmHRQK01VvExqpYudVo3d7OaojzWOhgfwpycqXLRPfSCLLMSDZcKiaWUNdAtyrJleHso-9x13dWqdGn1XLAXjLhSIDDmHC_F0k84Sl_IZbUGaDdoBFKdX96cg-efLMbHMJWrVJh1bk9drVTXUr-JoDkLwyRtN9lHFMH5C75K9X7qYO-F4IM880nl4WpWcTWoNQXi4FoVTTOBllO3gm4Sdtgn0-CdQ4VQd6IGNBz8ZP82oU-yXrXdfJJNGwbeI0QORz12HFWVlYYxM3JV6Hemw2nQsqveYM3XCcSw3YhpWb-SpK_K8LjLUgWf97PwcmVS2UbWqjGPRm3V8-nVFSgfwwOrIjCGGuKTuOGnSfdu4PfAvk3B55QvM-grt7AA7rZAyd2-SqcZb9Uaa7RlnYxOO8_FKuDdRu6e0xNQEhMwIDZBcZI1VDQETYPm8A1EpiuFmRZwxXD3NPsKvR-bHFSxHjQ4ZAu6DnYl1-kfN138fCXwZgNLzEAIfhpIxMpj6NZYaRy7dt7AYdeT43gSl7e8q4t4Anq3KPZVqZywDgI-qjxWaUkMmFNolQfjY2CYNypJfFAhP241S81fnYp4hv_Vjs0bmt-OJldZXjr6m_nnVOXlzSx_ZwFtCeApyji1iQnoe5JsOefj7OtueG3GfZFlSTFP-qmrK52GLRwXudaOmmmfwHTCjtH84UxUUYKFq3gZ0PyvYJjIbYGR5_6nlX48Cg1BnTSD3oAjQKXcdhlj20RK7m1j4bp8m3nYldsEedLd9hiS2x71yDbBnmTbgrsGMfVcsc2IgDoMiuQ2czHUpIIzuo2pixl8dQXaFgh5aJt7lG9z16VQyROIb7vwc5tAQ2ybMoYQYPEwlBCBDS7C8TaEkohuU4gKoF8EA15PEvibM-ghJoJCX7gwgySCQH3KAIt0oYQQ5sJXT2L4FcEImRSAhHguJmYAtlvQ6jZEOJxvC0agaY4IjMUFUANCTY8QjJqD7MOIEKfQNuOYbnMBXeGcQgFGQmDokms6LRkAAiZqOoYo2_Y8j8MoPIQtRmiaUOyZn9A-l6ZfMBZhBgC_Y4pdKGdc2vqea5oz44IeANFgxNsUI2lAzNTCSM0cMRfB3FEX0FAhoEQg6knoHndh8JLBnGCYEwYlTMIUQF132-UeFFAE3eMExg0IYCAwqYzAFCIXRgCjkYY-wvRMmjFhhkxfCbRHgcCenT34gaC_JkvGgBoMppoSD4ZKXIYBF4HI2XQMqEFdYbpEXJhUCNtcZsTMZEJUfrPb5k-Tfwdub2TfIWyoEuvmc8X4P7z6cHZsf_lhXJZXxcudna9fv764UuU4i_Q38JteBNlk5woqgcg8Lz7HSfLcoN3Zhf-9vjzY_9fZH8Hbs7OvU3T49uvrq7PnNxe7Px2__shO0-zqy3ssM_H7u3_9nO69_yLe3Pw-jk_evnn7bTz-kP3rsvyD__Ypjy_Ocr337ca73vXU_p46uHaRwK-Pxe5H-dk_-_ivo-s4RAfvv_52fPy7QOP3yfRXgfZP8oufz88P0dlvx2Tvl6ur396T6_Pw_OeI_fzT1_InHL27Pnyjvn1-72Un9Fie_c5_2v_1Bpfy4EB_-re4PBY__3pyc3o2vZ6Ss3fX79HeJTmmF_438uUPEr17k2TKk2_Yvo8vj9X4MLjws8P9b97zXybur-PTQ7IHOH4-y9_Q3w___e3LxU84vv7yiR3unuzuHu3uX-6eHO1-231zuavF1fNs90dL7J0ZtV9VixFFRfr6L6tPzNxYSdtyYlDJ5k9S6-7bgJYpGoB8CNCqnQYgGQQEflzAzeK923BWBhoI8RCgEdQGQjEEZ0W0AegNARql12h4EKGV2wYgGgK0aqnRshzsotGXDYzDgEaBNgDZYB-NMm0ADpLbarQG4Iw6r3aajPTK-Gt5DEapxjL72wlBAVyosswyJ4uccqydt3GqP2e5ciBazOMMgp04sCY1L3fIvvl5boT9CAqLmfwXO9qGpoUNTV9cpZdbC4YgntiqTWtlQY9MdNNE-OHIFhU7R-mhmoAKAYtdlLlKLsAlSHZOq0aMia66WuzMOgkAvq6_vz60DVcj_IH-w4nTINeq0CEYcJtIc6oA2qki6IoSOzNS3E2Zd5cQl42njokcvqrks16RNotI4x3QpE0dKhjbOHXqjg4T55n4h1NmdiBO1TPjJH0XBOGE0ieCNAgCBp__dSmyaW1iPcu_hzrZuKI1TvMTafpIY935J9L0koZhyZ5I00caG189uS5DhklQIsmTqW5qYM8j8slUzzSLyVA9aZZezUIpfiJNv4NHGXOflO6QirGpyicVM6eGQPxJjnpVjMlXP8nRYFRtFkeenJcGRTDzKHrSLDNqeBzhJ83Sq3TN-uETafpIY9flnpTuYMRIGPGeVMxsvYrKp5xUfybT7Ap4Ik2v8jXbJp5I0-vxepLhJ-U7GDkygp7Sde0YAMmnlbW5OWKMPUnPoOtitsE98crcCtG_yyrsWZZeZp-nuYqdi2lemkNEq9AmnFzms_35nciRY7z5BOaim8PU-S2bOqX6rB3-D8d2Doh08A3QOtWBAifKs4ljjmKbQwbOeZnHn3XxnawlueRp20eLIp7ETwRp5acQF08UaaV4OfvrCs3GFS-j4m-tdze-0mY25j-Fkv27zCCYfCJNb5RtDhr8ZUiz-NPufH61Y87z2MNFpnXzy7usrL6ZwtkfryxNCqfI8vJQT4rXN_un529MI50LTeoTQwb6XJfVmadmnR-3ynyqzSGnSE0TU_7LVCWxOcCEmqXH1eVIaZZP5nccAKpx9tUcg6wwXtxcmUNFu8fH1ZfdpKyRmeZmp5mqU0t1h5y4caDDFtoLj3YXvd5TSVDYfgN1kynMcVqfuYPexIm54smcrA9nAymSzFzPo5OJLre6yOZt_fAKulRXPUwyXyVkhqC-BgpCzctqy_qJLlWoSrVzVMIwdsxYdhaD3g3D2Kh6lfxq74ywZ8RMteaHGhx6Z1kZvtYl7dpfZqQnaP6HAd6vpmGr1WE863CHAEE2TauJToG1q7NiB2lizmDqdL5L_67hE7x8_GYc8Nu-LnU-qU-1tYbf-TIfeKf8S4PbNjnidjObHnVcBOaiqFS3h9woXoy3Ufhog120seGRfspVOW4Nsi6Zj6_--7GGVqGfHxkxrW5cWXzS6ipLHfwQdWEkdgV6nmQJSOH5WJvjnw2qtsrntG2VLpQDvQ-J65OlfTSumnGqdjbMQB_j0va0NdpF4Xyoi6LH4qR5CzubnVLoWGzii9cqTaub4xo6sP2poQTbHx5N8c8acuqW_hRBIg8SpBX5Sqlk7rV9Mse1Yx21mawfYsFx_d_XnYparlZhQGjQmbfozJvcMD-e5jqIi645bpTOKTC7Tmk3DU3sV-zCX48nf4sebFjFvNZ5ofPPreHOy-aDnZc8mqzNWnhcGXudhTfO7JaX-4sZX9G9tXdiFjYhcJpMi7bRan8bdHJv4XigKRuegt2v5hoyiL8aTW6M3eY0-Zgl4Fbetmrz4kFKNGs-mp1btLHqyMWKA59f5HIKRAYlZnzrW1wxBDRIlGGsjyaqcz6Zt-00Gt843Q4Se7OMSt5kwbS4RbHbnwdp1Yfp8ak0b9WxzW6cPpXfMG-lSkreItMg1CC1luD9M4lWJ1m_xuXYqe6pWoGEdizm4piFmVjPLJ5P4rIdn9YlCypVf7dIMW_WtrhJwlStPa5xhF5dm-uGHt39fGsu3GkRty6ZE7f--7G0fIV-w57UYi2ncgUbw-t-mo-z--HRBOt0Cj7qjckamyZXHvpTHm-loMEStx0x1EXzoc4K_oQZrnVn8ei-dFb-GdriEKKstraoS-a0rf9-LG1Rod-4I3xWrSXOroSdj65RPigxrbqPxlJHaXEV54-SBDbh_G0b2yhtZRr-XFtrUw1Ng7u5gPBgcmXuG7ztxC7KV9CSdjmp44k9miNW9WxdXWLVxoA2SZRvaGbW0qZ5YN7hyLV-aa6Qu9W1W8rFIBiekwr9IuHTIOFkYl74MM9vNF4PaVJvDUrZZha0elTaGDZ6KV9Cpyc6jwOzmSLdds6m_o1zFpuV217dbD71puRXpx9ukG8vS-2ejOtbsff9qdbCeYuC9a_nurTLudWCrfnV0tBCHKVX09Ii_HFrEhfB7_40iszDLtDxMrfP1hy8eXOwd3H08aC-0rJZxQ7u93Q68U0OufrXODwV5Lm2W1CcYuoX1a8mB66_2o7sg4zHSWFGliTqqmisEJgV2brnCdRbgs1CvY3nD8H041oADGM6-KbzEsZrcqJ5rAf7Nf9-R6eqBs2tz-YK0CFs5mmVYURVpLYHfnZ1gfUApexzNsNYbGJ1qLL5uKTu0eRKJYMt11_voERp1uSBW-MoDszVqcun3KzgV1BL6DK_hH9wvuvrkIdx2LdqhhBUH4crVy_ODNWuvy6hqn3sZpCq1dfh6vs6UINjrz4OV57fiZ6lb819tf1Y5lBLML3LUsvkIDS7cVI5ywPowJmegwwjfF-OdV5fIDuE6QR01AxkqeDksT8th8W4AbGEVvb9hgEKmW_DVSuncmAM5tsSTdS6pH-AoE2YYVTVZfaDimxZ1SqgHqRffSP2kimo1wcGyF99XUKE2T34A-OvPy8REqt_d6-zOKwuRh8Qlw7YMoWRBZ8fjsbe9v5wNN3r3x-O8U2iis-D811_Ha7-oUr492Cp_JeVkBihehgGI1sPw3DWdSQWdc-WuxDzq8Z7K8--LhP8-gbye2Oo7km_d3V7jfu9a1v1DTGTNuvLy_T3HGYJe5fTdH9aR80PQ2W71a8HFqNbC1dlyXpHujbGSj7rp4uWiXAFcgciMMVvlzh7q2GaP0fwVqvEvK6XJQ9DeOuJpgeNMysLlYb75lmVBw7UvMoyvQJks5697_PWF1PaxfpqZxZH2avxTWRT39t_XuYm_Pwjyya_2QjP_FbvX6X1nlXwcfdjIHVuWWTWjgH8dfZKwSub_qg30JrfZ_tnp4Wu3nCrlpdscWNrqwFtbms9Uyar-dI52z07GJ1nifNRx8no7dTP48LZi_Mg0eWotU_4pUMRHTW9jNeqmD1pFyf6pYNHH9L4y1Q7R_svHQn_I6F2CY0iJUJFfYy8gCnOXaRC4UqPowALLWmkVOC6oRd5IkKRp6XgvpIj22NLoJeOh0b1nl3Ti1F9R_NL59Nz-9_Igp3pLy8dl4wgBEniIDbf2egZNocu7HeTwq1q6tAxywKOSSKNGqcPjKVwzHt1FtSGxiPMmzuotRUE8xlc3ed707zQFlVRHVa4AQ9mVtH2v9BmP3SU5c5kGoydSZZr059rnYZZXgz27igtoWJ8afig6uUzMjCO7OAOgPlAPdwcSXsP-DMme0-neM0q5mVJmwe3RBj9b5CrCJr4zzPGTd3B3eWvTrLwTKWX2snNT_OQF9-qmbFOUAxCkDsh6J0Q_E4IcSeEeyeEvBPCuxMCo7tBZs-I2ERoW7ZJW7Y_vDv65cPB6AQ0lJ9kWTgC7X1947zWSdmUVEWZVh4OlR-5wuNKI0SRdHnoei5zme_jAIcUcZ-ESCtMpCs1p-ZBXi4ZlbQlqfDnQhhlUxbJyOb7nTEIC0EtvjIsWjNVa4e0hcVyCPYZszy_r79BHRjx6BlFvVz8jHBbbl4WapYDZeLAqd1Up3IDnUClaVY6vnY-QIMwmqicGJXAnH7wLDXYyuTGvI8CP8EfiPPqa93RwrQNqqGvvTnIotlcT7JraHkvy_PpFQjY9yBDbANS5g5zLu3l3DNtuEc5-zD5k0gr42qNDmCyU7OQ8DXLwyYfMxVhjkOuFBIhlr7wgX0D7mmXc8PDHuEYiimBD0KLIBIcM6mEx7AfhqRtcSRfWBzCFxbn7Dn812BxIdr2Zq4U69pOmOnCMTM742Fn9lxZvQNjUaWln6tEn2Mzec6Vzh0QgxrnyB0CHNkX3Rzj8IHsXGsHA87A5r2sXGR5GUc3o90wLBxGTZFEt_qD0SD6Z1hai1XF6iPaMJ31O1UzQOIhC1in5ZwzZTKpo74h1htRzBgZRzPcfzvu_95sTJ8YsgHn8LVWYTHaNal8Z3cyNb5hQ_DCCHvM15EiAdUUR34QYoEY4dRjoYzcKFCuRsR1CcM6EhQjQnwiBVMehQ9-S_AwQk3xapkQvpCV3STJAlWCbJkoNC4mqsO3_d7I_UzQMOxKTl5lplSSOIsU44iQu3v7jNOmY2Xc00FPzV3uxnY8TdOZainNuoYLV45asYVgRaeX5diBSKjljP41hPEv6M4tAyHDAss3YDc5db2ABIyGQjGNpGSRDDxJQ99XARMyol6AOPEiJSFaIyGmUQBxm--GQahchtt2kzXspte0m4ffs93sSHg70KnMJbPmkq9nLj26ormU_Mlc_uXMpegxl28yXZ1ZM7amuDL7BU5UnIyqeTLpC1T_fjt9Ui9hVED1Hz1Q7ayMwKsnZRTYaeRxkHZwhZUC35e6TEdMUp-G2tOYKM4UJRSHkWRYuOBCI4L8KGI88iOvG-otRP12UqaTmJGkHQzOpVe0shLfKhDHpP1BSsI4ioHRgePTuJyGurir3sIi9tY2wrrwhy9VnDrKqVLkTpXOdsDmg_88wt4_jAroSHuV5rH-tbm6AmoXVVRZKwOK7pktqljCiYtGdf_GMenHwLy7GfalZgBxo_G6R1UKEypAM4aKM0aqdcqyJrrx8cItIHjhdBifoANZPL7W-cvplD6F4fYojH1jn52LDFxHkCEQ3BxYttoy3hV1gsXqsh6B3SYeY66WWviS6MgnHrjjlHFB4TcUGLGmAY0kNpLP3chlfoSYcAkGh30wHF4nAUtX8pCP0ggqlI1zLyDPWTHNZ9K4XeVWzJfnuLpHZwHbYFizPcHBjlmUq2u2zjdsg0NRNw46ACBADWjzCLuDXnj1w5-gYSIwwSU0Hv7H5I0W6gIc4XgShxB1GD99EutqSGxWs6_JuxO3nfxWy39g3nBidSgQwGiVnK3LhpPBT_7BhvwD2SPurQ2Ho_l-w6bkEh5GUQBWWGsuiSe09n3wtgmUCRJIhigWAZWBK6gvkC_CyPOFIgqFRsQ7SyedeNptu91iedRYmawZs1u-bm4vnNnKVaLqlSJlzpvRJ_wta7lbBKDPmLtEJsTqAbNcPvS5pFjTPTYH1aEPoG7qO25seu257d9FZs5TzZE8LXn8iUse3oAL_jOEjqNzsBpjO-0dCWOECU29KHI1c0NOmQhCilgQEh5Ql4QcR9iLRKg8ySgOJOYopCz0hMtD5hG1soTROvFSr3e3Xc1i4-moWoBaAmOjVyszLm9YzZnPmC0s1VLJ4vy2ZHH3PqmohVdpfOz_rlf5ZKvm-wLQwOJhDoq6vhTtWF8CD46qfxx7Tmke1zJwEQfj2rYbi9EaISvInmaEUCkVlW4YsUBKgUA8uSd8RonvEzeKfJ9ypiXErQgLT4WCWEdX49vGsDc9dfi8u7DDO4uXQ0v1Ky6-P-N3QbQwOgpEoj6fUoVpVVXCnX0wval2Xidmlx-oNeLytsNnA0kjTh0JxpUdNKnfxSngprSR1mp_J0X1_2-CqVdaOttoTnYPj_ZGu0kwBlepKP-PgvDl_xbOL9MYNGucQIxRL_fWkrQ31rpU4xaja05c4RqDIz3KQ0rA2jCkg0ABLyPsE0ZoqLGvFUcs8pHCZq-MDjlTmIjheI0ML6g00jBuT-Zi8dUEViYdO7NcTjjNbZxWwZGGHznbozciPTtnRpgN81gH6feTMOjlgP7NFh9BKisR_xinn0uVjy6yK_VHNfvN6fYpClyuJVaRYJEXhihkyiPcR9L1YU6lpAL0XehGHmV-gH0mQiphooVZbvNEa7pdNjDd-FGmG7endgZkUtLTQo_Ox6DKoLpWOSiuWfTQQrHtBGpa2MNUrY40M1kjc0Gs1YMGX5c9Fhj4MIb6j9ktGtALYNS-zEGXn5FNrt3yluwZiEVqbR2G_XN89gdlpzBdSamd9-izfRDkJne7bhAgPyRYIg78bDYBaoICYGwhtB-AwQaG5n4AABRzYXLNNJJuJGUQ-rjD3U1lhnFTmfFHUWbuyspscEHpr6XKWN-87yvfT3Q-m3Vw0lRStmcdfA0Vgk-fNace4iSCQ-kSX3OPqYjCjAqPau16yueu6wnKMThyPPICxWTk-SSQyAW154UKKTK8nLgszNrM1F-oaVre0lzg6xq1Ztyj1fhCoB6PbKMc8djuDV9NE5Sxbw6mtbnCHgFUbVuHITxAzFXEeCpg57BQgRv5IPhKIeQz5hMlOSaRwoihQGovkpwGVLsS_KD_JkvsQTVjOJRzPsk-g-eWZNPQsMQHwxL8fizRWZL5XpXFPZlH9EeSZtejAl_vjYrL8chsqjchjPOT_qqTju3wgpAqSaMASVAanowUESSShOFIM98XglFFGFI8gDIWhSLwtAKeigRxUZdbzkBHTYEjjs30NlkEjfZUfg3TYZYCkyyPoxvHvNII8v_ViUwvo2liNniCuaujsLfgETgXGnCo3Nk1Fw1Mi1F98bZZVwM6mcas27KXpTCkvKpoBKOuV5hl_SUJEutHYeTs6-vMMhRebU2xW-0tSCoMKvhLBWy9DOX2u9pZbKJWO60gltOiBALc4iaPUkYYxwqHgfQCl0Qs1NLFRIauBg9bhIjRKAywFr6nXR2AeXKjCEFwxZHLwy43tfjH5tZo1Wgd0zs1N8wXdg0IBuVh4u7WN-frOA7GziVQorRbXcYmnN90nN1L0L6FiROlk6I069KHSTyZ6HxU9XmQsiCUkdBaUxchIDLzQpeqCOTQxxgCU8ypYiHyTBYmciV3ta8p5woE2UUkdFWXskOaXDR2_VX07pC4-RkkpIfURUXll05r04CVPYgBdH5dJVdBAUObOg1uGulKcduWj57x3sQnWZ74XGUJZMkQVFJks3E8w7i3BytXZ3154qGqdq2DtszaLBJ0qmptxo4LgzrPzBF_q4r-XhvY_5tZ2r71jtd5lsGMFIWdx7uklvs69F3loQCxIJDKE74gGNFAEMqkkOCVKSrBa_cwd2mAOUNu6CuXSoJFEHUjs-9UaulgZGZXMe0myKLaL0DaiVJrR43rf3N7Mf9PFHBxR7L28RTFk7R_L9JO-tdkPqkSArF5ZH5wo0endgt8GQe3BZ74TBHFVYQ9iamxv1JoiMJC8HSVUQYR0oyDDVduhMGl9qIgIq5W1JcIR2HneJdoO0D87k3svSB2Y1rvF7uy2D502RbfcZxoR1mGrFzr-RXeo8WLUmidJ6V6cLYWXXvSiKaDvXnE26jsWxF_s0WTXmbtO1n8MTba9Ez9keXwex6HsUpvsyhjTEYEuRHhHrAe5b5HfHDOA-DCUJuTWzT0qK9RyKhvDg8rT5kMEwl9jwqfdbeltlj0GebtU4KDvNVx9W5z3f7U3JBvuNp46u5KJub7mfjeSSMPCK0wUSHVnh8p6uKIMs00BExcujCBlEUwiYxb34EFEZJugEMA5hGlAQOVxOXfMbQi_ScZDyYgB9lcZZ-Ye3Lzm2VqG3kqAppRSiMCcRZRJCQcuxTB_7lUFHmaMlcEMghcFPo8MKl2AnAA4etALyVul9Fnh5LYoK6m3QUfFRieOI__6Ojx6so6Z3bPxffO_6x3uj6koPmn5j2Mo7QoYXDlEu0VuaEnosBTKPLMFQcRJ1RHRISh8GDqfOkHFDM_NMLgMRFGQniB6yPjd6uIoa72muWrLF-3FzhaZ8bu9IF7zNY_hrzJ-jjdgEsYm1SlTWxZkZpL1GElYKaGn6XTwiTLI-dDqlZE913uKujlk_6DVm-y3I_BJU5NBnyiR-BZTIqsz8KF1EcRM1s5pdSKywCzUAUSBQFHNIT_4HcP-AghYB-fSUYoh8jL7DkDi8e6URcEXFPw6AtQzkBa0Ce5moY676jQ-RnJD6kPTPPZ3B7pxJE5eFB5-SYrOTHepPFiJrPzEjCA5sB0MV5znnopKB6SxMOeh5QMIhkAXcB99TmQDAUCnFQCYsdwAO4A0ooholyMXOKaHXyuxAEPkOisKaG_h6VxV7E0e9PUuKhL1FcYCBZycKaALwULkE-xlkhLIhAPgGlDpYHmwKRgXTAlkrkaBxBRsIBDKIHb6svlS-KDhQvW3sFYm4zu4bdlJufP0ha9hJd36oJKZHyzYHo7HtORCrAIza4PEXId-iGKXIIjn2NBeCSYFwkdyRC7jIJnJcAJjgLkMc_3XBSwbjz2Z6oCq-Mergq8lXwkE14Na1RJEUZBBN5OIIkOhOAswDpkLvIwQogRX2jJufSUhDiWetwX5h8IgiOXgTpZnW3n29H7tqp8j1xqXjAdvg6q_bipVXdH4Yez48WL4RS7aKu-zbfSinVRDMhPfYBd3M18npgjuo3yut7i9ULz8ahpf4eqmHtpnF3_pijUXA-TRX20apNdHHx9HGQlHD20E4R2SFeV3INyEECqq24_xAboITZAj3Vw2H3CXQR0DQTVs7ldDHidLvSw1r3I0DcnfANzgjeAg61JkAU4eRBPbkJGyYryxRkGv6clYHXRShJWXZs3u1ivwlLtXWlM4uJKhr4eMMGx1-5BXbSGjPeKBHkgQ68mUsMkaPAPvlNZVwdUH8LG_VIt1sbQ6PXSeZPC7c5bVfRAzmmMGZP7kW0dDVJdv7OowO4rcnQDZoCuKLYE3C7WJn5d1Ef8HgRUCNpBUBetiIB4LsxOuwdV0aoIIPDhHQRV0Rpy3z_97IGC21AcmC-XAVfIrgzYojXGYJ_AaDTpLfWHMJGdFuui9T2iyvquwbWzd9dmFdx7qWX-wNlpyAhmSzmMulx0OKwqWoNW_VqVPFgvP9xfYw91Gdl9_Iw-h4Wu1ZP5w7abN3Z8Uy4oXlEPewx1pLEqWct1GSTIqk6cYFzSjlKoih7qQq0dljRkE91PeYvNMBNfW689hKtnzxjNKsh7URtvwIPYmFDzzcyDeKATzlb1iJiHO7reljzYmXhoFIE3Q0e6KdW2MUT3ifcXVfgatFjUEg9i6Q1NxaosiRGnHRe5Lrpv9mrFhl1PdJJmVck61qCHkzdmXVe1awwT0bFrddF9nN2HZ1nIRhR2H0U2prVvI6py2dX7dOYRBRXqc_uAwidtFgSK6pUF-wqCfbYuS6P48tYjdCbzbR91NK8AVm82-VmWaJXWLvrtd-u02fJ5VLzOimLx0N1pnKYqSPrg9-PCLKIcvD01u0jfp_VjQHc1My104_nP-fswd1WbD8juTLWPkdlXCleu91Zd64sMyLZGHbNR7kybexmSm3W7uDeOk8Q8p7ZWD9sPXa1Ay-pClZXJ6OcqDe1erbEOLzLb03VHVj3GNtC900QFepwloc6bfFU9yDd_DdFFaDk8DCgr6ge15rXoHZXmGxJnTx_OKhLC8B3t5fP38ea1-PIqiye2G1XuGhaUrN8509L6tezS3qKCZIPgk2lSxldJrPNPsbkqV4fn9pFF87zmuU6iBRLM7x7fujSZz9qpeQdnPtcrVlp7BgxjdYkpPXH3DKzTPUOHdeCrDp1lSWLXOZuCsrzizOGawQsivRVYvUuAuyRrdgvo-lw4f7RuzkIIs2FqFPFlnLyP7KtbwIRWp81rzl4Yqk3eq51TVY7fR6-nsd2Q-s_R_wOjbeYb`
  try{
    await navigator.clipboard.writeText(text);
    await alert('Import code copied to clipboard!');
  }catch(err){
    console.log((err));
  }
}

//DOM mounted
document.addEventListener("DOMContentLoaded", function(){
  //page loader
  const body = document.querySelector("body");
  const loader = document.getElementById("page-loader");
  const loaderTitle = document.querySelector("#page-loader h1");
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  setTimeout(()=>{
    loader.style.opacity = "0";
    body.style.display = "block";
    setTimeout(()=>{loader.style.display = "none"}, 500)  
  }, 2000);

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  const nav = document.querySelector("nav");
  if (isMobile() && (window.screen.width < 768)) {
      window.addEventListener('scroll', () => {
      if (window.scrollY > 100) nav.style.background = '#06c';
      else nav.style.background = 'none';
    });
  }


  /*
  // set background gradient colors and angle using mouse
  document.onmousemove = e => {
    var boxw = document.body.getBoundingClientRect().width;
    var boxh = document.body.getBoundingClientRect().height;
    var x = e.clientX - (boxw / 2);
    var y = e.clientY - (boxh /8);
    var rad = Math.atan(y / x) + Math.PI * (x < 0 ? 1.5 : 0.5);
    var deg = rad * 180 / Math.PI;
    maintitle.style.backgroundImage =
      "linear-gradient(" + rad + "rad, hsl(" + deg + ",90%,30%), hsl(" + (deg + 120) + ",90%,30%))";
  };
  */

  /* //Scroll Btn
  let mybutton = document.getElementById("myBtn");
  let navBg = document.getElementById("nav");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      navBg.style.background = "#06c";
    } else {
      mybutton.style.display = "none";
      navBg.style.background = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  } */

  /* //True Skill Display
  fakeSkills = document.querySelector(".fake-skills");
  trueSkills = document.querySelector(".true-skills");
  skillsContainer = document.querySelector(".skills-container");
  fakeSkills.addEventListener("mouseover", ()=>{
      trueSkills.style.display = "flex";
      trueSkills.style.opacity = "1";
  });

  //Adieu les Progress Bar
  progressBtn = document.querySelector(".progress-btn");
  hiddenText = document.querySelector(".hidden-text");
  closeProgress = document.getElementById("close-progress");

  progressBtn.addEventListener("click", () =>{
    skills.classList.toggle("active");
  });
  closeProgress.addEventListener("click", () =>{
    skillsContainer.style.transform = "rotate(360deg) scale(0)";
    setTimeout(()=>{skillsContainer.remove();}, 500);
  }); */

  //effet de ripple (goutte d'eau) on click
  const root = document.documentElement;
  root.addEventListener("click", () => applyCursorRippleEffect(event));
  function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.animation = `ripple-effect 0.4s linear`;
    ripple.onanimationend = () => document.body.removeChild(ripple);
  }

  // Get the modals
  const modals = document.getElementsByClassName("modal");
  const modalsArray = [...modals];

  // Get the buttons that opens the modal
  const openBtn = document.getElementsByClassName("modalBtn");
  const openBtnArray = [...openBtn];

  // Get the <span> elements that closes the modal
  const closeSpan = document.getElementsByClassName("modalClose");
  const closeSpanArray = [...closeSpan];

  // When the user clicks on the button, open the modal
  for(let i = 0; i < openBtnArray.length; i++){
    openBtnArray[i].onclick = function() {
      if(!isMobile() && (window.screen.width > 768)){
        gsap.to(window, { scrollTo: {y: projectPosition}});
      }
      modals[i].classList.remove("modal-hidden");
      body.style.overflow = "hidden";
    }
  }

  // When the user clicks on <span> (x), close the modal
  for(let i = 0; i < closeSpanArray.length; i++){
    closeSpanArray[i].onclick = function() {
      modals[i].classList.add("modal-hidden");
      body.style.overflow = "unset";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (modalsArray.includes(event.target)) {
      modalsArray.forEach((modal) => {
        modal.classList.add("modal-hidden");
      })
      body.style.overflow = "unset";
    }
  }

  //easter-egg
  console.log("%cStop right there Criminal Scum! Nobody breaks the law on my watch! I'm confiscating your stolen goods. Now pay your fine or it\'s off to jail.","background-color : pink; color: black");

})

function projectModalOpen(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "flex";
}