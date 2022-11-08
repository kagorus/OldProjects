Values:
  if (IsStar)
            {
                switch (StarTypeID)      // http://elite-dangerous.wikia.com/wiki/Explorer
                {
                    case EDStar.O:
                        //low = 3677;
                        //high = 4465;
                        return 4170;

                    case EDStar.B:
                        //low = 2992;
                        //high = 3456;
                        return 3098;

                    case EDStar.A:
                        //low = 2938;
                        //high = 2986;
                        return 2950;

                    case EDStar.F:
                        //low = 2915;
                        //high = 2957;
                        return 2932;

                    case EDStar.G:
                        //low = 2912;
                        //high = 2935;
                        // also have a G8V
                        return 2923;

                    case EDStar.K:
                        //low = 2898;
                        //high = 2923;
                        return 2911;
                    case EDStar.M:
                        //low = 2887;
                        //high = 2905;
                        return 2911;

                    // dwarfs
                    case EDStar.L:
                        //low = 2884;
                        //high = 2890;
                        return 2887;
                    case EDStar.T:
                        //low = 2881;
                        //high = 2885;
                        return 2883;
                    case EDStar.Y:
                        //low = 2880;
                        //high = 2882;
                        return 2881;

                    // proto stars
                    case EDStar.AeBe:    // Herbig
                        //                ??
                        //low = //high = 0;
                        return 2500;
                    case EDStar.TTS:
                        //low = 2881;
                        //high = 2922;
                        return 2900;

                    // wolf rayet
                    case EDStar.W:
                    case EDStar.WN:
                    case EDStar.WNC:
                    case EDStar.WC:
                    case EDStar.WO:
                        //low = //high = 7794;
                        return 7794;

                    // Carbon
                    case EDStar.CS:
                    case EDStar.C:
                    case EDStar.CN:
                    case EDStar.CJ:
                    case EDStar.CHd:
                        //low = //high = 2920;
                        return 2920;

                    case EDStar.MS: //seen in log
                    case EDStar.S:   // seen in log
                                     //                ??
                                     //low = //high = 0;
                        return 2000;


                    // white dwarf
                    case EDStar.D:
                    case EDStar.DA:
                    case EDStar.DAB:
                    case EDStar.DAO:
                    case EDStar.DAZ:
                    case EDStar.DAV:
                    case EDStar.DB:
                    case EDStar.DBZ:
                    case EDStar.DBV:
                    case EDStar.DO:
                    case EDStar.DOV:
                    case EDStar.DQ:
                    case EDStar.DC:
                    case EDStar.DCV:
                    case EDStar.DX:
                        //low = 25000;
                        //high = 27000;

                        return 26000;

                    case EDStar.N:
                        //low = 43276;
                        //high = 44619;
                        return 43441;

                    case EDStar.H:
                        //low = 44749;
                        //high = 80305;
                        return 61439;

                    case EDStar.X:
                    case EDStar.A_BlueWhiteSuperGiant:
                    case EDStar.F_WhiteSuperGiant:
                    case EDStar.M_RedSuperGiant:
                    case EDStar.M_RedGiant:
                    case EDStar.K_OrangeGiant:
                    case EDStar.RoguePlanet:

                    default:
                        //low = 0;
                        //high = 0;
                        return 2000;
                }
            }
            else   // Planet
            {
                switch (PlanetTypeID)      // http://elite-dangerous.wikia.com/wiki/Explorer
                {
                    case EDPlanet.Icy_body:
                        //low = 792; // (0.0001 EM)
                        //high = 1720; // 89.17
                        return 933; // 0.04

                    case EDPlanet.Rocky_ice_body:
                        //low = 792; // (0.0001 EM)
                        //high = 1720; // 89.17
                        return 933; // 0.04

                    case EDPlanet.Rocky_body:
                        if (TerraformState != null && TerraformState.ToLower().Equals("terraformable"))
                        {
                            //low = 36000;
                            //high = 36500;
                            return 37000;
                        }
                        else
                        {
                            //low = 792; // (0.0001 EM)
                            //high = 1720; // 89.17
                            return 933; // 0.04
                        }
                    case EDPlanet.Metal_rich_body:
                        //low = 9145; // (0.0002 EM)
                        //high = 14562; // (4.03 EM)
                        return 12449; // 0.51 EM
                    case EDPlanet.High_metal_content_body:
                        if (TerraformState != null && TerraformState.ToLower().Equals("terraformable"))
                        {
                            //low = 36000;
                            //high = 54000;
                            return 42000;
                        }
                        else
                        {
                            //low = 4966; // (0.0015 EM)
                            //high = 9632;  // 31.52 EM
                            return 6670; // 0.41
                        }

                    case EDPlanet.Earthlike_body:
                        //low = 65000; // 0.24 EM
                        //high = 71885; // 196.60 EM
                        return 67798; // 0.47 EM

                    case EDPlanet.Water_world:
                        //low = 26589; // (0.09 EM)
                        //high = 43437; // (42.77 EM)
                        return 30492; // (0.82 EM)
                    case EDPlanet.Ammonia_world:
                        //low = 37019; // 0.09 EM
                        //high = 71885; //(196.60 EM)
                        return 40322; // (0.41 EM)
                    case EDPlanet.Sudarsky_class_I_gas_giant:
                        //low = 2472; // (2.30 EM)
                        //high = 4514; // (620.81 EM
                        return 3400;  // 62.93 EM

                    case EDPlanet.Sudarsky_class_II_gas_giant:
                        //low = 8110; // (5.37 EM)
                        //high = 14618; // (949.98 EM)
                        return 12319;  // 260.84 EM

                    case EDPlanet.Sudarsky_class_III_gas_giant:
                        //low = 1368; // (10.16 EM)
                        //high = 2731; // (2926 EM)
                        return 2339; // 990.92 EM

                    case EDPlanet.Sudarsky_class_IV_gas_giant:
                        //low = 2739; //(2984 EM)
                        //high = 2827; // (3697 EM)
                        return 2782; // 3319 em

                    case EDPlanet.Sudarsky_class_V_gas_giant:
                        //low = 2225; // 688.2 EM
                        //high = 2225;
                        return 2225;



                    case EDPlanet.Water_giant:
                    case EDPlanet.Water_giant_with_life:
                    case EDPlanet.Gas_giant_with_water_based_life:
                    case EDPlanet.Gas_giant_with_ammonia_based_life:
                    case EDPlanet.Helium_rich_gas_giant:
                    case EDPlanet.Helium_gas_giant:
                        //low = 0;
                        //high = 0;
                        return 2000;

                    default:
                        //low = 0;
                        //high = 2000;
                        return 0;
                }
