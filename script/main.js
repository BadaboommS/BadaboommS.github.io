const copyCode = async() =>{
  let text = `eNrtPdty2ziyz6uvYLnqnJfYCe4Es8me8i2xZ-LYYzuXyUsKJEGLCUUqJBXHs7X_fhogRZGyKEu2nM25zNbOyESjAfS9GwD54r9-jBLnu86LOEtfbuGnaMvRaZCFcXr1cuvd5asdufVf_xi8OFPl8DTam8SJafnH4G8v7G8n0d91Av0Q9CtVfqXL91Nc9DM8G6u0HOosPVFfsvx1Fr7cepulesvxVRrG5fSvIFFF8VaN9MutSz0aJyrfclQR6DTcn7Ucp98mcRGXGTQGQ5WroNT5GzP-7qTMTrIQYCKVFIBvpOL0Igu-6vJ1nk3GL7fcLed7rK8roOOTs9Pzy9bc4rQ9N1jc316cJepG5xelKp0C_vVyaxdopK70UVwCKpVMAA_aerYUdm-SF-WBGsHPu_tcjLUO7wY7y_VhFOmgjL_r_Twu94cqDWboiXyKXCL7et-vx8kkKeNxEut81uupFH1djm6NYaSjB_gyK1VycHZx98oryGwF8n-Iy-FeAuRcCa-BPr5K41KvDH6WxUWWrjXrlYD3J0kC2rUS7LkudP5dlfGKE9nPRn6crkiT_SxLwuw6nXHwKSG4V9xzrU6jSizPVRhPihNd5rpoeounvcJyolK1nxUrcNVAnukcjEK5VocLHWRgR9YdY82eb-JIrw651jrqDuvO5n7rOLxYFW5txPeb0DlYz9UgL7JJsiJkObNk2EW4X8e-tUEpcfsgD_SPmW1kcgnCNiTGvUMfp7N1YEGXYWyDEkn6p_g9M9ZiRZt1eHTWQHIqMEdPEReSem7vnM-GN0UcqORE_YhHkxH4gUv1Vc8GZIxg0i-yV8MyBevX21vI_t6v4lzfq-M-GLr7dRyqrOjrifsZZlSzgZOEiiUBQfDcQB-nQQsxW4b4XZpbt9CKJDDny3qcgyqaaMVP9KpdZoPUGt3yElJiT2LOGKPe8mGvdFqPfbOaPXujdTB8DYHduSr1aqZ8pagreG5A20SWy3CuOXPTZc2ZH6Y6v7q5GMY6CVuKjRldpcd0avtqvFpnS4I2hjYpOFltzEU0wRTTpyvNeU0CfVB5uJrjWJNZh99V0baQ0nWXU62CbxOsXxA0RKTQIdRzwfGSUD_7YgL9ZL1uu_kom7ScFqPLF1HBt9dA0F0WvkpqznU4CTouxevtuZdAOjafevAlE0uSRV1wb5fdslTB14MsvFqZUnaUtXo0qZftejEZj8EUGhFYFYHxUxC5x60oxb0b9hTEt63PaJk3WxX9DHZl9I2PXnWMuQ6rr8M417lBdu7wxWsO0bDyBIzDCLyYTcBPspbnfIr7eQOZ2kqZlAVcMf07y65h8kNTRSnWg4Y4ZKbwvVPJdfrXzcr4O-ArDXCYhpPc6MHKY8z3WDTMZTwC01kUB6pUTlgHse9VHqu0JMClLafQKg-Gb4D7r1SS-GAGXm61n5q_5jpi09Hgf_HM1rHMr-PROMtLJ1FFuRsE2SQtj1QxBDNFhSSez3jk6xBzSQIaEBchHlBPhlhSwQlDWm7ZrudaJSPgzv6Wo38YhGcqL2-aypQB2Z8Wryr8iLihdhHXGLuc0cCNOJcR4cpTiAhPBsjHruBhNV-LDpZTlHFqs38wfUmy5VwMs-vd8Lsh5iVk70UzohqPdRpO_7Q4LnOtHTU1ZIGhhSW1-cMZwQzBW1b6AWj-yZhHtjnl4l_b_-ScULQtCOEE_mIIwrxtSsBPwl_wTOJt5gpG_tUp3x2Hlk1pBrMGvnqS4W3BuKTbgIy42wRiRgZIpbctABnZZoK7cptSimEsypi7DRAAAhPhbJtCyka34TFC28TlMDkisCe2BaYE4DHD3jbDRNBtTACQu8SFBxJmuY0Z5DDbWLoCnphlEY9yui0QINuGtcFIDBYjtxkVLoKVuTADwjmFCbuYwGRcArOG8N7bxtxzYRrCY0ACIaATiAaWMFWGXTNtws0YCJAxgqAvlx6DXsBli37b4_AvLJGAgVxAv-1C2AzTZRQWigGfoAJG4xRhaWcLBMDMJdsYAQO2MXUxUA0LswDMzWiE2r4C8W2OpCCGshxmxDxgGvNc09fjCG9zhoFxHBEpDcFgbEEYgScMlmOIKuDfHgbE1BOAjDPJzQIMh2AZ1b8xoEcUJkg8Q1MJgFTACkybeQpNjDDbz-MwXUJBjDBMyT6RFp8hGkNmMcBUmIqEqTCGgdee55muiAJCyBuBDcKFNQpYlVmPsEiM7AAMdHFhUkRIIUB4PIAGKeAYREgA6yBn9aA_SIlhLHVhbYwZ6ngeUJAiF2ZaCS8h2LS60Hm7EnUiQNWN9AAkkcwFKoMAg3ACkwGzy6QADhnhBNmoCQPwFAMJGHJdAXNg1FBGAicY8hDw3HXNE-CfEXIXRI8yDsQGvsJzyJ6AfyCSwK1KwbjnEQlzM2LPQX6YMW6mgqLym92umtEtpwTlbtXgCa3L66aZWz3_24t352_sj78Ny3JcPH_27Pr6-ulYlcMs0j8g4HwaZKNnY-gEFmKn-BonyY5B-2wX_tm7evf26tNk-Pkw_CTxx6vXvx3Rk_zjzdXQBX0lxfXrTyCYn66UHI7en-4cuzuT4Zvri7-ouyPTv_zs4v3h-Zej38fu3pePf7ni92_jT59_jE7d11--MIFP356NPvzx_k_vNSPjNySK9nJyU3z7Urw9_EMmH5E6-XoThK_2Pn2_3svZUEqV05t49-DDhXz7Ifkkj179-Mbf__gyvrge_Th5E751fxwdXB99Pgux-pTnu-VwJ6R_fn9_PH71Zu-34g8mXx0d_pFcnl7f7J19Pf7y9ib_7Srd_8x-3yl_yz798fuH02T47us397M6-52efQmPrvCO7ydD9e0Dj76kl0rv4vj6vdLqR_Tx-0jp768-fT8V398NP04u_PI3uXOps8kn7_hqPDnbGX9-c_5OH5TZ2cmwPBzHf12X7kEcejvZnx9-__zx4irb-3T1arj7odj78_pVsvsh2FNXr652P3zd-_Pqj3fu3uuTyXAcX0cnBfiEXf8TpZahz6YcfVFtexQVe-u_rOk1_LeWdsuJSz2qjPKzxXDW_M3gWC-cMbMtfKQP0FrlGWAvnFXYFsLeGVpdnAG6vXDGNczgeO8EjT-awclefMZmzOC8_nHBWs3gaB-ctf8zONELZwxkizB1SAWcbzP8hQl_8xj8bBU7PTMe3UY5xuWbH2-zUltY83D6x4sLo-KFU0C48lqPir0biFdfmcx8bt-gjhkM9IUuq-Cr3eflVplPtIm2IjVJzPM_JiqJTfyD2k_fVLuGaZaPmnIhoIIQxuRUFcbLm7EJF3bfvKladpOyRmaGm8YzVdxST8iJw2ksUz-0O4G7s1nvqyQo7LzjNEgmQNu0DuVhNnFi4jPfzMxsgpqaWDhdUZFkpvKg1ThLHbI1j7fqXbMO5ld3f51kvkrIFHe1agKjX1VsPNGlCiGufXYMfC2emYU9s_jg1_u4tKs1AbGNWU2H2UNrlbuPvrVoXf82AAcV2bc6c8LThc2t08a99XxTNarjw2aMRujM6HfT2aL55Slt9jhNVQPG_JpCptGh-O3GhvK7RWFcZAppS_61RX6ycfpPR_pPIErx98KxAz5bkQhoOREahTNIT9N6g7tZf_O0Bmytv37S6veIJDCjOKepY8b5aVJ4pJORLn-GDB7ERWD22FPdoX77cUP39sNHpHhrmGcbXeuHHCLNzjLrJ80K678fcXHVCJtdV1VPtKXR3UmuOiu81TbTovmWxzPjn7QCsc5vVl03W9Fy7IZhbEoRKvl41ll1u6HXfnR7N6sXm179YZqYcqROf5792MvCG2dakH98I3IGKNJA7-UqDTt8aDdAHPWxxYQTdTVSF_FVnFQNM52jNZSpONmQabPsqOfk2Ek5WeSAvSnisa1pbUoxGwm1SuYnKtS3tdI-7pXOds9HtEetYTa99uM0yLUqdDgNZWZH0hpC9MD0UqUX5yOSqBnTmQ7q1KNummKvbAl0XxXdUGj2uJcu7Z6PSIpqGMeME6dXm9eW6zgq_VtWZPa4d_3nahyH1shVevyoKjOb5aYJsJ-l5mADxAg6rArh3ZzgVnMvQRZhekSatIdz6vF-orfLyuJhfg6tFmjZUwPVnlFXQjsNDS_e6utuy2NKpR3IqUfadI52mhaJmkAU01l287Q_R8vMFqcpsjxmijYd5NlGuf0qgREOVNFNGVpPm8W2nj2m8TWjOHaYTbO3suvVUYYFrqdquMP5THs_vvupRip-noGBuX7XP8XCHI9GQFBlppx0A6VOQ8OB7uPHDILqgRw70qPlcXWltSeZq1tXyOgaPI-X1B6m1dmbJbSouq8nAdX5tL1bKUPnebPwztMHsr_et-9brRnI2VsrU1jV_Jh48jStgurmQOss6plv7Q96buN5zJgHRnOuhzqt0wGnGvJnl6rxAruEN5zfT_J5pZw-algwffB4CleNYDL2w8SenCo2LoiH4F7AeuyZcz8mwekoYLdtSchjDXKWfo-DR89F6kk5zYxvSV_980KXdj-u2nEzP638WYjjdDwpLdKXW6O4CD77kygyV9ZgcWVuL-Qdvnp1uH95_P6wPhzV7mIJ8DmdjHxzUav6b7PH--JCWyo4xcQvqp9mWwcCY9PrALgRJ4VZXZKocdEyQ2ZLrZ550mQTC7FZqKO4ufG2GNcMoB_T4Q-dm8T2g8qDPNa982ra75hUNaA5BGwOk_VhM3fL-hFVwY6xNdUh5R5K2Vt8_VhM5aJ3OaZxSd_j0VglvSPXrXdQojSbqiCxcRQH5hzecpabLdgKagldgmCSq-BmCb_3Ww56IQ57Wa8PQdXY37m6jNfXu25dQlV79a-XqlVrf_cDHajetVeN_Z2bc-9ZtX22GEsDtQTT26xyt6A0u3FSGeUedGC0G5B-hKflUOf1GcA-TCdgo6YgSxUnj_1J2a_GLYgltLL3ZnooZNr6u1ZXQXrWYNqWWKLOXYwegrZh-lFVtxZ6DdmyrtXR5l761Qell7Cg3oHoIX_VuoQI02sRPeuvm5coSbW79T2Lw-qYfI-6zIEtMxiZSXEfisae_X84mvnLAA_H-CpRxddeftet_d3flbGJbRZgqWKYlZAYpXoYBqNbD8NwPh9IzPqeLw8hmiPoCztPW5cpfn0y_d4YqvPz9-5uj_ffu7c13xDXaljBUvvdwCwR73KSHgAxyiWivSIqO63FdmC2urVwVZ5s4UrXxthJWJepcCvB7EcErvhoSbC3GqbmlsqRVol58UCWPAzhrRurD1pnVhYqDQ_MLbsHLtRc0puMAdl0ZqeLovUZS-exvng2zaPs7QaT2dQ3QC7K3KTuf2XZ6E-bDZtf9QFEWh86hBj3IAZS51ZEpuMYwI_T2ysvbKJan4A0v6cHICeFru6zV3UA-3haj7Sd2qcSz5XJnZ8757vnh4M9ex7BuSizVA_eGJV29pOJLa3-pq91MniXxt8m2jk-eO74SlKpAk8QLlyNsSYS-a7ymStZyGgURCQKtVKIhhJJEVLpuYGkgfJDqggJBnYmdtnPHckG9te5_vbcEe4AcockDkBYnzt08M8gV1Gpw3_thmHhYOKcVefAnSplnbUTByB0ONfuqFxX03fqk6kdjAB_MVJJMt_rCoxt-RyG-w9ThKn3eZvrY3VlZ7AEAQhcNsXyhDll5uwC0Cy0XLkvrBg613ri1PW2KrpbGYc0KEDwdHpVDpf1Gir4TXl70ZXK2-oB5P7nKgWxyM2_QRKf8q1amur6Qi8EuROC3gnB7oTgd0KIOyGmd-xsJairNKSrNO_eHv_xDtQmn5gCOES9ZQ5ZUTmY3hC7rTXYDVyPY4480BIceq7rCsEkZYQFHkbmmhXzvYgyocMIET_CEUCEXEokAl_hea2p3m7y3LHK2lYbNDjQaWY2Xc3N-DjQpjwmpEecUH81172AwQ44LEdVf0Hrnkp8lahBLRGFgcgtfqtC-1kKq8gBo39je55AP1Cn4eAIgv0sj4OfJiKLWEMX2LN9lefGrh-aytNgP49HkHrfZgoLFWZugDzhKYZ0qBmnlGskPOSGJKSRJDJQmnqaEtfXnvIDHGgfKxqFXIdelym0y4Z_RuZq3QTo9i-3rVWjWp9NVDuodbxR0CcYNBAeNOdKoCX-CiRvXnzkXMflcFrvNACVLXyCxZ0dh3GinYMJNH4wNgSs2S-k24tYy7qsPdl9fbw_2AcDGJVqdgT5XV7Eqbb73CMjzkZEZ2_oavOb-9J1I-ZjKhlGbuSTIOCSRSIAF8UoQa72XBRiGdLQ90D3KGEe0oRKwgj8s5TfT6jXZqVjzpIdpyUkZPGVceYD0ZaChuOb4cAi6vFFjj7PstD4EPDz-6a4XN7WishFQpHA9-EH-PhQeDTiKvQJJxHGLEQudqNQauYzTwYBVoRxJTyiWRCBLYu6VOL30ArWbrGbKraaWYn-zBU3ok_uEv0oyx2bG0_d9xPM7qdnv7bCiEUKM9OFqcbsZ-AZ5lVmerK_LQpSen4UIgU-ixLhIh4FAXgvqalmrqA8Qj7CEdI6EIxDtMAkpxD36SDyiBJsuYGs98iiPBs5N9kkn2dG4QQqBVfm-BpcbGRq_jocUO92iGKWkGbpzjTbcaZlRYMXoCMYtKwYOj_GvbXLndOuwzdA6sPRWOczOp9UF5gHZ3lcjCBrDW4rW4i5iyOqsaddhgNmHL8kEDoHroAWgVTIBXNdRoRkyOM-x1SAPopAQAef3Yqm41FsnH-ZQczRpXfH_rTCUdarh7Sjh9O74s5F_JcedCLFaqPKmWa2v7iWyIXB3AWQqnTOdF6Y4wLQ0h83KK4lY4QjAbKvlISYDfKdwGMa_vGF9hA4l8hzKecChRELsAQ_As5HBaEUfrCMaaTLtMthXEeTU6Gqr-MNVeGQDhN0pQtjcx4mSbLAnrzrRPmgSeW11ukAFmrcU6V15kpuhdy8C8Fudzm2O0RQgyfcmMkD_QMYb2hS_d3xa2BN8snY6Oa_Mwz0VjN9qwcL2ucQCkYuRZrpEBMUycDHRHkSbB4x98mZlJiEGPsQoKOQBISHEF74CkJEV0QPCxYI_4lm7kFhBkYPVScSKi1oGCnFXRZBFoRCj4YBCcHnc5cEOMIiEiEwQPihoggJFjCOPcS0S5CU_-PUaRbu_6rahPFCpl4OVel8GMbB0PkABLNFr36-Cg65E6gMwyRQ2DCTEq0oBVtIVEgxMBN46BESEsR8gn1CCaZcST8gREd-l6_iDt8W2L1dQ88rSA4c5VRl7_r8q5PZC3uD-sWmtV50fZ95e6g9TDLjvK191ygGs9dgFdUYdQQDlAAzArlxrmCqTgRMH-p8GxJuZceajAcwK47bY9VdrbKa4qyZd_XW4uLf6hsxWRTXfFBlAEua6szhjV4W05AAIhPhUl8gDzIs4HSAGI08Ad7QB0vKFBXCBDrU4xFBgeuBXASc-76kCKt1Yhq-KHbpVspEb3izsMVsFYESpoUOqrPr5r3NlXI7BrbUdSKtrJRUVZHpdTaIWCcFSIdO9SjWNVMhrcDoNu8H9Ya1kbh7j_cG5KvOb0j9Ko5fPfrCdKFpAZkqpg75tVn3dZZEg-YX2JrECFwnPWHSAy-AmIgk5y7XkLgrU83RkJYyGXmQxoPnYKHkgY8g7lI-uGrOwW0ESGjlz2eqs1I0J32l6NoVgBL8GCeZdQbnkxQ8LKU98TUVy0Ll6TAO0DKOTOIJwpHG5STUVfktzCbm1Nev4hgW1mQuJmC5sqYi88ckDr4WcfIdVmN3VqeMPcryAjK5mzYTEVPEJR4WnBEfGKdYRDyGuOvKgEqBIZwCCwKGQwSSE5fKkFEcCjAsnvS02TPoxln1QV8wQ6i9t9CpQ-AZQ98Zptgzm_VepgOMAv8WgaMYmHr4bb9iV1S7FdvT6Kox9tA4F3gNsOipZYQTc45upRr7w9RtURkIXHgB7s1M4DT3Bxd2e8pO50YvsOe-D1lMgCRiPBQi4iTwdAjWHViDuAb3DYZdMRfUMUKcURLJyBWaaB_-L_GcmpE2V1CXK509l9Z7xQ2ZAAg0xp72bAo_2LXbK_XBL-dcmWgLgmu767LYHTwhXrtxWm-a4_IZxIOGHsawsqlhNTHE7zDyv0EVN7E3slA6xALpOMlyPwZLFedhogcX5c1VrFLnfVzoTn6kIGzHnoTgLVQu5woypMD3KFIh1iIMIgERXYh8NwTXzwPP9X2FmQRbbTQY9PZokppqgpnLvCGu9-ueO7td-TiCUAs7u_5NUajprt7giWDdoFrIW1E17jPO_dHBE0LbgmLjgsZqPOH8lhT9_z6ZeYf5Quf-u0ogQcrV1EFcZpNgODg3ytouz2MXDIlmDGPlEYgEIy2ECMExcA8HYIV8jiQOsAdho4tAkECk3MiDNFxAgh4GSwvPdQWxqLK0zETozvmqWyALl7q4jAQ2aDg2Ub1x9HpwGZcqjUFELsYxwE2tUMcmgYXFfNA-vLcH4li_0hpCP5j-Uwm06dhkQSETDhCHBMvj1IuARIIhX_kSaxZG1EVhSJgOFVY4dLkEiiopfQ_yL4jNb4U-M68pZ9p37uztvG6ba9mlqdms2m8Mpz0K1y2zYy47ZYyOJe4GxR1VulBBbg4GV5EzWHzLNNM0c7jguB2wzpd5fGVCYFWPbH1DNy-YL_LXU242BQqb6mGEnOq1oM2Wu51LB1V7dUt7_VIuYmWlXyjn3kI538-z63RWQbtWeVjnhdl4qEvHtg-qE51gurHw6j8WyDancl4jsBB3aIQLsWGn2kAkDik175OkQQiZAAk49hiPIPKHGAWDjrk-DbjAhONQe8zXgvqQjEY4oIEfzVcbZhrhzTRib8f-r60TncoeAbdhdMG221DF9jQ-Jzt0zN2SQfOkqiGZZw6k_SDAHsi6-WyE859qNP57J_6Z7UtBntH1ZZaotv7UVS-C-9Rr2zoz26XORro9L0E6iii-qk_aVcuYJIuem9eKLHp-Eqfh_9Aw6dGOkKCekhqI7_cMcvlLU2sC0xen5dRPHqmJr_OvjRoJUJQ-LfIQpre0CHl3-RUXy87pLu4ixgLFIS2DzJooJFweIklUGGI3UJFgEcU-RW4UKmX3zCHLRq7UmFIcqY4WuS0touiWFs1rktvVpCbYwt1a-I86Ya5T6EWJc-toGEILIz_Qrm-TOK9ujQ2euOhWyLgsi2hM_3n9_Yk6ZJToVshoX_yvTWnHIU-pdWa3UVUJxsC-PXzqXeLC1o7SaoPUaqyvwWfp_482G5VadJbxyJD6EvgdDl5NrmJzSNKx74MY1NcDQC04n_4xrxF4XoUYu0ODPDDInbyIuDSCsBWB_oTGz4Q-JD_YjRjEX8zlCFFPQ0zrKRdFWNNIw39ohCT1Ai_kopMXnetQg4wuzpLalY5Gt17vnO90ozZ3Lsl-gt3q7IOVturKhrIST-jihu7GyPQ19VUhA8I41E6f7ZlqkFSTPe8PwcPpKtKbS7CbF0X0pNi3Cy-HycRW2wDiVpFlXsdV8HW7KrYYJ9edcF1ONSGkPfPYzKR3z-1Sxcl1bF4NZSPPwZ_Trk1DHM3wmUJQebsSBPQ0QpPctJJIF_2fTyKXQMg7Ibw7IaZvp11oPciiUuZeVpbZyB7i3IuL0QQyuU4J8xxk0c-uO2VojwcBkhphCSkrRdQPiI5YFMFTjEJzjIpSBfkq5KgeOEsPEYZdgqnLzWvKvfn6WDsXa7lH1lPBPNcTI6-qtPPT1SvMSrPRaSc-jSWq_cwBY_OHOq6sbNoP0wwo5GuqeWdC6_jTzBoUP610SRYd7YRk6wrovgeKPTjSidWw-UKC2bqXnhe6kkNqzMAWIx8Jwn2fMQj4EfDI0zoSOJIBlzQiLPJdX8ooxEgzenvjsaeMzGdM-NME4ScQ15uU1ARyxXT3Zm-S29Nq9b6OMXe0be7MruQOcc5yHcU_mmDGHONOAE8I5tq5mETttqbp1t5BAUbPHpnaq7LcKwDiHeM4j6odM82O5j2h2HqCOj3oPyU3eOJ1T5g_8W5HUqTnPN_ycpo9QPAL5ca_ti1ji5P0LJ8Uga2Kgy7HP-J8cD7xbyrD0DnoJyBS0ZGnpQq9AIJ837yuHPOQI04kiiTxeOhDCs2wFyABsQsBm-ejKDAb-rob9kvUY8Kw3IgJ6_rp6YWwbvRchc5hBubKHiG8Md8QmIu8aztWYz3XI_NOH6NcDmQIoJpVpG10FGZXt4dOYp7FJj6aBvahOQHQRW2s6ao7sg8q4BO--PTNUI1n-_VVuXUfZEGFMK_q5UVNUklJf1JpbinMR8R3V2YIIm3h8gRkYaZQKZBHI7O9FyKNQtfnWOBQR6EfSkEgDvbDSJsCsJBhRLXHuQuBsSvr1SyIgd3FVZrzndcQA5-37baYj4EXV2lshQZjtlKF5Qmb33qyyRyZyyNxJUamibVP0uEqqaueNwYU9xZM66RzBtrZLavzmfZEALZrhztRvPkKnDP9jFq3pNma5f_dGs7d1nyhPi7aUHudxyPHHpgZHN2MwR7FQc9Oa4QjEnGIQhANFAkgVIyUHwhXS2y-wQT_1VQLHyw1Q66ImNSCQlzJfXMWzru1Fz5TAPawnVbCl-2oslvOm_4v2FFdyN65_a23p-cnu28G7XdhQUKpnSOwFrCYzmE4X4dUR1SBIwWvCnYQRzyKKFO-QoHLBPzHnCDFnAaQMzDmR0gGQqLAp1J2L4CRloft1NXOuzumaOGOaXGfPS_zUYu-C6bdr13YMY7Dd-dv5r8ZUr0dqLqS2fqMyJkPsC-3pny5SMBht5_X_WZvt2o-3uLe1WdPQy7eXb35ksMUAVp1zHkcfH0cZAM4IBW4VuN5RGIDCxIbWNA6OGxFbh4BXQNB9UGEeQx4nSkskI17kWERT_gGeNKWdHFfJGxNirS-7CMeJJWbULN1cFRVGv5QGSQPlCC69pTX4VAVuj9E6hfrzUK5X2DI669itQ1560NZKxry6bdMGkHzViNUWx_Y_Si1jnjsjiZJZ5r0vmJMN2Bc6Yocqj-s1uZQ61tr8xxahKD6nlkHwewTZyuyeDH12dq60dJGQu7qYsqA7R7YXcuEr62Grbnxe9kavjY92p-4Y8u4WH_NrRNxzT7wtoIY1B_eayNofYtvFTmqvk_XkaPZJ-vWMhUPsdGLMTw80mAPdTRsU-EfXWsmzWdgNu9E-KaCJ7yZFZEVTWb9xcW2pLY-wriipC7k8doRccuk4PvZWLEZ2vEHByXriKW13G33Tu9FbrwBP7sxteSbYYR4YDz68OjyoRFx-yuq_AGUoJsyLxtDdJ9ssUUMuQYxWrrxMLHckG29t5qsGsZWX8vtRA-zD-iuEH7U3_ntGPXZp39XiV-q7-Z2Z9B8SndVr7BAHzbmJlf1b_W3kTuh3OxzyetV38gG0nyyEbu9iCIbM963EVXl0OlL0-0r-Ow707M0iq8swFmiAj3MErPFVg1hroHeVC_ibt6C7qIpwh54s9lev6e66cR7uxTme3mnkb2nfFEq-6LR-ReuLxlo-ob0aRd6x-SmxqgZgiyHr_CfZ0lia81tMizvON2Ymp-gu7xb84LgKbzo7zBqTjF8iM11EB1e2Berm9fqX-gkaq2ST9_sWHP7xbMzVQ5Po71JbN-j9Y_BfwPjOR-y`
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
      gsap.to(window, { scrollTo: {y: projectPosition}});
      modals[i].style.display = "block";
      nav.style.zIndex = "0";
      body.style.overflow = "hidden";
    }
  }

  // When the user clicks on <span> (x), close the modal
  for(let i = 0; i < closeSpanArray.length; i++){
    closeSpanArray[i].onclick = function() {
      modals[i].style.display = "none";
      nav.style.zIndex = "1";
      body.style.overflow = "unset";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (modalsArray.includes(event.target)) {
      modalsArray.forEach((modal) => {
        modal.style.display = "none";
      })
      nav.style.zIndex = "1";
      body.style.overflow = "unset";
    }
  }

  //easter-egg
  console.log("%cStop right there Criminal Scum! Nobody breaks the law on my watch! I'm confiscating your stolen goods. Now pay your fine or it\'s off to jail.","background-color : pink; color: black");

})